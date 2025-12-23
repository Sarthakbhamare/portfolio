import { Analytics } from '../models/Analytics.model.js';

export const trackPageView = async (req, res, next) => {
  try {
    const { path, referrer } = req.body;
    const userAgent = req.get('user-agent');
    const ip = req.ip || req.connection.remoteAddress;

    // Parse device type from user agent
    const isMobile = /mobile/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent);
    const device = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

    await Analytics.create({
      path,
      referrer,
      userAgent,
      ip,
      device
    });

    res.status(201).json({
      success: true,
      message: 'Page view tracked'
    });
  } catch (error) {
    // Don't fail requests if analytics fails
    console.error('Analytics error:', error);
    res.status(200).json({ success: true });
  }
};

export const getAnalytics = async (req, res, next) => {
  try {
    const { startDate, endDate, path } = req.query;

    const query = {};
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }
    if (path) query.path = path;

    // Get page views
    const pageViews = await Analytics.countDocuments(query);

    // Get popular pages
    const popularPages = await Analytics.aggregate([
      { $match: query },
      { $group: { _id: '$path', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Get device breakdown
    const deviceBreakdown = await Analytics.aggregate([
      { $match: query },
      { $group: { _id: '$device', count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalPageViews: pageViews,
        popularPages,
        deviceBreakdown
      }
    });
  } catch (error) {
    next(error);
  }
};
