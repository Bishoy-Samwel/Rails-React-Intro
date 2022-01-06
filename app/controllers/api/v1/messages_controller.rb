module Api
  module V1
    class MessagesController < ApplicationController
      before_action :set_message, only: :destroy

      # GET /random Message
      def random_message
        prng = Random.new
        ran_msg = Message.all[prng.rand(Message.count)]
        render html: ran_msg.title
      end

      # GET /messages
      def index
        @messages = Message.all
        render json: MessagesRepresenter.new(@messages).as_json
      end
      # POST /message
      def create
        @message = Message.create(message_params)
        if @message.save
          render json: MessageRepresenter.new(@message).as_json, status: :created
        else
          render json: @message.errors, status: :unprocessable_entity
        end
      end
      # GET /messages/:id
      def show
        render json: BookRepresenter.new(@book).as_json
      end
      # DELETE /messages/:id
      def destroy
        @message.destroy
        head :no_content
      end
      private
      def message_params
        params.permit(:name)
      end
      def set_message
        @message = Message.find(params[:id])
      end
    end
  end
end