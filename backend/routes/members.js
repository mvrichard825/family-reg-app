const express = require('express');
const router = express.Router();
const FamilyMember = require('../models/FamilyMember');

// 👉 Insert a new family member (POST /api/members)
router.post('/', async (req, res) => {
  try {
    const member = new FamilyMember(req.body);
    await member.save();
    res.status(201).json({ message: '✅ Family member added', member });
  } catch (error) {
    res.status(400).json({ message: '❌ Failed to add member', error: error.message });
  }
});

// 👉 Get all family members (GET /api/members)
router.get('/', async (req, res) => {
  try {
    const members = await FamilyMember.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to fetch members', error: error.message });
  }
});


//Update the Rows of data into table

router.put('/:id', async (req, res) => {
  try {
    const updated = await FamilyMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: '✅ Member updated successfully', updated });
  } catch (error) {
    res.status(400).json({ message: '❌ Update failed', error: error.message });
  }
});



//to delete the rows of data
router.delete('/:id', async (req, res) => {
  try {
    await FamilyMember.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ Member deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: '❌ Delete failed', error: error.message });
  }
});


module.exports = router;
