#!/usr/bin/env python
"""Script para reinicializar la base de mongo, en caso de que se corrompiera"""

import os
import platform

if 'fedora' in platform.platform():
    os.remove('/var/lib/mongo/mongod.lock')
    os.system('service mongod restart')
else:
    os.remove('/var/lib/mongodb/mongod.lock')
    os.system('service mongodb restart')

