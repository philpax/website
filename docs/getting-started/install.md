---
sidebar_position: 2
---

# Installation

## [libstardustxr](https://github.com/StardustXR/libstardustxr) (server, client, and fusion)

### Build system
1. Meson >= 0.55.0
2. Ninja (tested on 1.10.2)

### Build dependencies
1. Flatbuffers >= 1.12.0

### Download
```bash
git clone https://github.com/StardustXR/libstardustxr.git
cd libstardustxr
```

### Build
```bash
meson build --prefix=/usr
cd build
ninja
```

### Install
```bash
ninja install
```

## [stardust-xr](https://github.com/StardustXR/stardust-xr) (reference server)

### Build system
1. Meson >= 0.55.0
2. Ninja (tested on 1.10.2)
3. CMake (tested on 3.21.1)

### Build dependencies
1. [libstardustxr](#libstardustxr-server-client-and-fusion)
2. Flatbuffers >= 1.12.0
3. EGL+GLES 3.2
4. GLX+Xlib
5. fontconfig
6. dlopen
7. OpenXR Loader (required even if run in flatscreen mode)

### Download
```bash
git clone https://github.com/StardustXR/stardust-xr.git
cd stardust-xr
```

### Build
```bash
meson build --prefix=/usr
cd build
ninja
```

### Install
```bash
ninja install
```