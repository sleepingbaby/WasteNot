from django.urls import path, include
from .views import Sign_up, Log_in, Log_out, Info, Active_status
# from django_rest_passwordreset.views import ResetPasswordConfirm

urlpatterns = [
    path("", Info.as_view()),
    path("signup/", Sign_up.as_view()),
    path("login/", Log_in.as_view()),
    path("logout/", Log_out.as_view()),
    path("status/", Active_status.as_view()),
    # path("password_reset/", include('django_rest_passwordreset.urls', namespace='password_reset')),
    # path("password_reset/confirm/<token>/", ResetPasswordConfirm.as_view(), name='password_reset_confirm')
]