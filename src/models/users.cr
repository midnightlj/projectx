require "spider-gazelle"

class User < Spider::Model
  table_name "users"

  column name : String
  column email : String
  column uid : String
  column provider : String

  # Define a method to create a new user from Google OAuth data
  def self.from_google_oauth(auth : Spider::Auth::Google) : User?
    # Check if a user with the given UID already exists
    user = find_by_uid(auth.uid)

    # If the user already exists, update their name and email
    if user
      user.name = auth.info.name
      user.email = auth.info.email
      user.save
      return user
    end

    # If the user doesn't exist, create a new user with the Google OAuth data
    create(
      name: auth.info.name,
      email: auth.info.email,
      uid: auth.uid,
      provider: "google"
    )
  end

  # Define a method to find a user by their UID
  def self.find_by_uid(uid : String) : User?
    where(uid: uid).first
  end
end
