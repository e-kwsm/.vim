YAML := $(wildcard *.yaml)
JSON := $(YAML:.yaml=.json)

.PHONY: all
all: $(JSON)

%.json: %.yaml
	./yaml2json $< $@
