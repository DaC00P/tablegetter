class Event < ActiveRecord::Base
  validates :name, :frequency, :job_name, presence: true
end
