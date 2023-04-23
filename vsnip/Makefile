TOML := $(wildcard *.toml)
YAML := $(wildcard *.yaml)
JSON := $(TOML:.toml=.json) $(YAML:.yaml=.json)

.PHONY: all
all: $(JSON)

%.json: %.toml
	./toml2json $< $@

%.json: %.yaml
	./yaml2json $< $@
