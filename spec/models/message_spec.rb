require 'rails_helper'

describe Message, type: :model do
  describe '#create' do

    context 'can save' do
      it "is valid with body and image" do
        message = build(:message)
        expect(message).to be_valid
      end

      it 'is valid with body' do
        message = build(:message, image: nil)
        expect(message).to be_valid
      end

      it 'is valid with image' do
        message = build(:message, body: nil)
        expect(message).to be_valid
      end
    end

    context 'can not save' do
      it "is invalid with body and image" do
        message = build(:message, image: nil, body: nil)
        message.valid?
        expect(message.errors[:body]).to include "を入力してください"
      end

      it "is invalid with user" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include "を入力してください"
      end

      it "is invalid with group" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include "を入力してください"
      end
    end
  end
end
