from django.urls import path
from django.contrib.auth import views as auth_views
from .views import Sign_up, Log_in, Log_out, Info

urlpatterns = [
    path("", Info.as_view()),
    path("signup/", Sign_up.as_view()),
    path("login/", Log_in.as_view()),
    path("logout/", Log_out.as_view()),
    # path("password_reset/", auth_views.PasswordResetView.as_view()),
    # path("request_reset/", Request_link.as_view()),
    path("password_reset/confirm/<uidb64>/<token>/", auth_views.PasswordResetConfirmView.as_view())
]