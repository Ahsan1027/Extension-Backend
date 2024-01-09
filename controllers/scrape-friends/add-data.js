import Data from '../../models/scrape-friends';

export const AddData = async (req, res) => {
  try {
    const friendsToSave = req.body.map(friendData => {
      const {
        name,
        imgSrc
      } = friendData;

      return {
        name,
        imgSrc
      };
    });

    // if (friendsToSave.length === 0) {
    //   return res.status(400).json({ message: 'No valid friend data provided.' });
    // }

    const savedFriends = await Data.insertMany(friendsToSave);

    console.log({ savedFriends });

    res.status(201).json({
      success: true,
      message: 'Data received and saved successfully.',
      friends: savedFriends
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error when adding Data',
      error: error.message
    });
  }
};
