.PHONY: build-dev run stop delete print
	

build-dev:
	docker-compose -f docker-compose-dev.yml build

run: build-dev
	docker-compose -f docker-compose-dev.yml up

stop:
	docker-compose -f docker-compose-dev.yml down

delete: stop
	 docker rmi react-app-dev