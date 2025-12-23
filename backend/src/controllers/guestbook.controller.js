import { Guestbook } from '../models/Guestbook.model.js';
import { AppError } from '../middleware/errorHandler.js';

export const createEntry = async (req, res, next) => {
  try {
    const { name, message, email, website } = req.body;
    const ip = req.ip || req.connection.remoteAddress;

    const entry = await Guestbook.create({
      name,
      message,
      email,
      website,
      ip,
      isApproved: false // Require manual approval
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for signing the guestbook! Your entry will be visible after approval.',
      data: entry
    });
  } catch (error) {
    next(error);
  }
};

export const getEntries = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, approved = true } = req.query;

    const query = { isApproved: approved === 'true' };

    const entries = await Guestbook.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-ip'); // Don't expose IP addresses

    const total = await Guestbook.countDocuments(query);

    res.status(200).json({
      success: true,
      data: entries,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

export const approveEntry = async (req, res, next) => {
  try {
    const { id } = req.params;

    const entry = await Guestbook.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    if (!entry) {
      throw new AppError('Entry not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Entry approved successfully',
      data: entry
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEntry = async (req, res, next) => {
  try {
    const { id } = req.params;

    const entry = await Guestbook.findByIdAndDelete(id);

    if (!entry) {
      throw new AppError('Entry not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Entry deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
