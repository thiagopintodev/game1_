Game1::Application.routes.draw do
  root to: "home#index"
  get 'mobile' => 'home#mobile'
  get 'web' => 'home#web'

  match "fb_canvas" => "home#web"

end