class Transaction < ApplicationRecord

    validates :abreviation, :user_id, :shares, :order, :price, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: "user_id",
        class_name: "User"

end