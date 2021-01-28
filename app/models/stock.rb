class Stock < ApplicationRecord
    validates :abbeviation, presence: true, uniqueness: true

end