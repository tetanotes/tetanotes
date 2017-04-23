build_dep:
	cd ../opennotes && make build

build:
	mkdir -p doc/
	cp -r ../opennotes/web/* doc/
