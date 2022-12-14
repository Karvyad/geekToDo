from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from usersapp.views import CustomUserModelViewSet

router = DefaultRouter()
router.register("users", CustomUserModelViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api-auth", include("rest_framework.urls")),
]
