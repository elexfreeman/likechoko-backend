docker run --name mysql-latest --mount "type=bind,src=/Users/alex/Projects/DB,dst=/var/lib/mysql" -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_HOST='%' -e MYSQL_ROOT_PASSWORD='12345' -d mysql/mysql-server:latest 