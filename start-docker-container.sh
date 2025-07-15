#!/bin/bash

docker run -v $(pwd)/backend:/app/backend -v $(pwd)/frontend:/app/frontend -v $(pwd)/data:/app/data -v $(pwd)/start.sh:/app/start.sh -p 3000:3000 -p 3001:3001 test7
