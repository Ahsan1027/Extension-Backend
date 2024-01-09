import Data from '../../models/scrape-friends';

export const GetData = async (req, res) => {
  try {
    const allFriends = await Data.find({});

    if (!allFriends || allFriends.length === 0) {
      return res.status(404).json({ message: 'No friends data found.' });
    }
    
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all friends data.',
      friends: allFriends
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error when adding Data',
      error: error.message
    });
  }
};
