import ConversationModel from "./conversation.model.js";
import MessageModel from "./message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await ConversationModel.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new MessageModel({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    // socket.io fuctionality here

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in SendMessage controller ", error.sendMessage);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("message");

    if (!conversation) {
      return res.status(400).json([]);
    }

    const message = conversation.message;

    res.status(200).json(message);
  } catch (error) {
    console.log("Error in getMessage controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
