class Settings

  class << self
    def env
      Rails.env.development? ? load_env : (@env ||= load_env)
    end

    def load_env
      YAML.load(File.read("config/settings.yml"))[Rails.env]
    end
  end
  
end