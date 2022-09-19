from django.db import models
from django.contrib.auth.models import PermissionsMixin, UserManager
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.validators import ASCIIUsernameValidator


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username_validator = ASCIIUsernameValidator()

    username = models.CharField(
        _("username"),
        max_length=50,
        unique=True,
        help_text=_("Required. 80 characters or fewer. Letters, digits and @/./+/-/_ only."),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists.")
        },
    )
    first_name = models.CharField(_("first name"), max_length=100, blank=True)
    last_name = models.CharField(_("last name"), max_length=100, blank=True)
    email = models.CharField(
        _("email address"),
        max_length=300,
        unique=True,
        error_messages={
            "unique": _("A user with that email already exists.")
        },
    )
    date_joined = models.DateTimeField(_("date joined"), auto_now_add=True)
    date_of_birth = models.DateField(_('date of birth'))

    objects = UserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")