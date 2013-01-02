Game1::Application.routes.draw do
  root to: "home#web"
  get 'mobile' => 'home#mobile'
  get 'web' => 'home#web'
  get 'index' => 'home#index'

  match "fb_canvas" => "home#web"

end