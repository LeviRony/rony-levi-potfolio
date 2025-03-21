const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewerName: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);

async function getAllReviews(page = 1, limit = 5) {
    const skip = (page - 1) * limit;
    const reviews = await Review.find().skip().limit(limit);
    
    return reviews;

}
async function createReview(review) {
    const newReview = new Review(review);
    await newReview.save();
    return newReview;
}

module.exports = {
    createReview,
    getAllReviews,
}