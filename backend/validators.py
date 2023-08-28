from django.core.exceptions import ValidationError
import re

def validate_name(name):
    error_message = "Improper name format"
    regex = r'^[a-z ,.\'-]+$' #characters allowed: a-z, spaces, periods, apostrophe, dashes, case-insensitive
    good_name = re.match(regex, name, re.IGNORECASE)    
    if good_name:
        return name
    else:
        raise ValidationError(error_message, params={'name':name})