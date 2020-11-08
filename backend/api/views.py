from django.contrib.auth import get_user_model

def is_signed_in(user_id):
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=user_id)
        if not user.session_token == '0':
            return True
        return False
    except UserModel.DoesNotExist:
        return False


def validate_user_session(user_id, token):
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=user_id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False