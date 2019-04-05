curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "credentials": {
         "email": "'"${EMAIL}"'",
         "password": "'"${PASSWORD}"'",
         "password_confirmation": "'"${PASSWORD}"'"
       }
  }'

echo
