
MAKEFLAGS := s

.PHONY: deploy

deploy:
	yarn install
	yarn build
	now --public
	now alias

