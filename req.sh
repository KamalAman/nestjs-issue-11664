#!/bin/bash

curl "localhost:3000/" -H "x-tenant-id: 1"
curl "localhost:3000/" -H "x-tenant-id: 1"
curl "localhost:3000/" -H "x-tenant-id: 1"

curl "localhost:3000/" -H "x-tenant-id: 2"
curl "localhost:3000/" -H "x-tenant-id: 2"
curl "localhost:3000/" -H "x-tenant-id: 2"

curl "localhost:3000/" -H "x-tenant-id: 1"
