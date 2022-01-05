class MessageRepresenter
  def initialize(message)
    @message = message
  end
  def as_json
    {
      id: message.id,
      title: message.title
    }
  end
  private
  attr_reader :message
end