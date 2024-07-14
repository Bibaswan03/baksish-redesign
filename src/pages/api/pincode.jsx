// pages/api/pincode.js

import axios from 'axios';

const handler = async (req, res) => {
  const { pincode } = req.query;

  if (!pincode) {
    return res.status(400).json({ success: false, message: 'Pincode is required' });
  }

  try {
    const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = response.data[0];

    if (data.Status === 'Error') {
      return res.status(404).json({ success: false, message: 'Invalid Pincode' });
    }

    const details = data.PostOffice[0];

    return res.status(200).json({
      success: true,
      state: details.State,
      district: details.District,
      area: details.Name,
      pincode: details.Pincode,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

export default handler;
