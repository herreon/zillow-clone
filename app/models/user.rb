class User < ApplicationRecord

    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :photo
    
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    validates :password, length: { minimum: 8 }, allow_nil: true
    validate :password_requirements_are_met

    def password_requirements_are_met

        return true if @password.nil?

        rules = {
            " must contain at least one letter"  => /[a-z]|[A-Z]+/,
            " must contain at least one digit" => /\d+/
        }
        
        rules.each do |message, regex|
            errors[:password] << message unless @password.match(regex)
        end
    end

    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end
    
    private
    
    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end
    
    def new_session_token
        SecureRandom.urlsafe_base64
    end
    
    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end
