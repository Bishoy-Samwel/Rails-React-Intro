class MessagesRepresenter
  def initialize(messages)
    @messages = messages
  end
  def as_json
    @messages.map do |message|
      {
        id: message.id,
        title: message.title
      }
    end
  end
  private
  attr_reader :categories
 end