curl --include --request PATCH "https://wdi-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
      "game": {
        "title": "'"${TITLE}"'",
        "author": "'"${AUTHOR}"'"
      }
    }'
echo
