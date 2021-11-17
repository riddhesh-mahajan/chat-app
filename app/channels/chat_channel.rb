class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    puts(data)
    puts("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    t = Time.current
    puts(t)
    ActionCable.server.broadcast("chat_channel", { username: data["username"], message: data["message"], datetime: t })
  end
end
