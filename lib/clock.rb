require 'clockwork'
include Clockwork
# require 'clockwork/database_events'
# require_relative '../config/boot.rb'
# require_relative '../config/environment.rb'

module Clockwork
  # required to enable database syncing support
  # Clockwork.manager = DatabaseEvents::Manager.new
  #
  # sync_database_events model: ::Event, every: 1.second do |event|
  #   event.job_name.constantize.perform_later(event.job_arguments)
  # end

  handler do |job|
    puts "Running #{job}"
  end

  every(10.seconds, 'Change Restaurants') {
  `bundle exec rake tablegetter`
  }
  # every(1.day, 'midnight.job', :at => '00:00')

end
