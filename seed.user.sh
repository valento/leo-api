#!/usr/bin/env bash
# write your curl iteration here:

# set -B
for i in {1..13}
	# echo ${name}
do
  curl -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer admin" \
	'http://localhost:3000/leo-api/user/create' \
  -d '{"name":"testero","email": "Tester'$i'@mail.com","role":"USER","password": "Tester'$i'@Foo"}'
done