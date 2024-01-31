// ==UserScript==
// @name        Krunker Central Cracked
// @namespace   krunker funny
// @match       *://krunker.io/*
// @grant       none
// @version     6.9
// @author      Krunker Central && justDarian
// @description A Krunker hack by Krunker Central, modded by justDarian
// @run-at      document-start
// @noframes
// ==/UserScript==

const publicKeyBuffer = new Uint8Array([48, 130, 1, 34, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 130, 1, 15, 0, 48, 130, 1, 10, 2, 130, 1, 1, 0, 229, 111, 226, 207, 86, 246, 233, 241, 116, 242, 253, 123, 32, 118, 31, 184, 74, 86, 236, 84, 216, 171, 62, 143, 22, 141, 124, 163, 18, 182, 250, 248, 207, 30, 46, 243, 178, 216, 202, 237, 161, 56, 151, 161, 24, 13, 74, 110, 134, 208, 64, 71, 168, 198, 247, 92, 29, 190, 12, 158, 166, 240, 72, 216, 57, 245, 117, 201, 213, 249, 95, 179, 97, 236, 151, 105, 250, 218, 181, 193, 104, 154, 171, 42, 46, 58, 109, 29, 12, 56, 203, 132, 226, 20, 88, 236, 228, 201, 204, 47, 80, 55, 48, 182, 143, 120, 51, 150, 157, 121, 20, 7, 99, 120, 88, 127, 17, 127, 181, 89, 219, 85, 136, 167, 21, 100, 253, 43, 15, 218, 32, 80, 146, 237, 110, 236, 137, 58, 115, 63, 208, 11, 201, 39, 168, 166, 79, 159, 12, 226, 147, 98, 213, 213, 216, 67, 205, 252, 81, 8, 56, 103, 200, 20, 221, 227, 178, 38, 185, 198, 66, 28, 81, 32, 252, 245, 147, 44, 197, 79, 121, 153, 36, 55, 228, 16, 128, 200, 177, 68, 192, 81, 129, 139, 232, 223, 146, 214, 224, 60, 81, 48, 126, 147, 68, 205, 56, 103, 81, 124, 86, 34, 52, 116, 169, 185, 233, 192, 91, 154, 29, 61, 8, 201, 56, 56, 107, 255, 238, 174, 185, 125, 42, 178, 26, 50, 83, 84, 74, 110, 165, 66, 105, 72, 229, 241, 154, 127, 249, 117, 129, 71, 31, 1, 234, 39, 2, 3, 1, 0, 1]).buffer;
const id = "_" + Math.random().toString(36).slice(2);
window[id] = cheat;
function cheat() {
  delete window[id];
  class _0x1a8eea {
    constructor() {
      this.hash = this.genHash(8);
      window[this.hash] = this;
      this.settings = Object.assign({}, {
        aimbot: 0,
        superSilent: false,
        AImbot: false,
        frustumCheck: false,
        weaponZoom: 1,
        wallbangs: false,
        alwaysAim: false,
        pitchHack: 0,
        thirdPerson: false,
        autoReload: false,
        speedHack: false,
        rangeCheck: false,
        alwaysTrail: false,
        spinAimFrames: 10,
        animatedBillboards: false,
        esp: 0,
        espFontSize: 10,
        tracers: false,
        showGuiButton: true,
        awtv: false,
        uwtv: false,
        forceUnsilent: false,
        bhop: 0,
        spinBot: false,
        markTarget: true,
        skinHack: false,
        aimOffset: 0,
        aimNoise: 0,
        keybinds: true,
        antikick: true,
        fovbox: false,
        drawFovbox: false,
        fovBoxSize: 1,
        guiOnMMB: false,
        hideAdverts: false,
        hideStreams: false,
        hideMerch: false,
        hideNewsConsole: false,
        hideCookieButton: false,
        chams: false,
        chamsCol: 1,
        wireframe: false,
        customCSS: "",
        teamChams: false,
        autoNuke: false,
        chamsInterval: 500,
        preventMeleeThrowing: false,
        forceNametagsOn: false,
        aimbotRange: 0,
        autoServer: true,
        botNametags: true
      });
      this.state = Object.assign({}, {
        bindAimbotOn: true,
        quickscopeCanShoot: true,
        spinFrame: 0,
        pressedKeys: new Set(),
        spinCounter: 0,
        activeTab: 0,
        nameTags: false,
        frame: 0
      });
      this.gaybow = 0;
      this.colors = {
        White: "#FFFFFF",
        Black: "#000000",
        Purple: "#9400D3",
        Pink: "#FF1493",
        Blue: "#1E90FF",
        DarkBlue: "#0000FF",
        Aqua: "#00FFFF",
        Green: "#008000",
        Lime: "#7FFF00",
        Orange: "#FF8C00",
        Yellow: "#FFFF00",
        Red: "#FF0000"
      };
      this.isProxy = Symbol("isProxy");
      this.GUI = {};
      try {
        this.onLoad();
      } catch (_0x172688) {
        console.error("ERROR " + _0x172688.name);
        console.error(_0x172688.message);
        console.log(_0x172688.stack);
      }
    }
    onLoad() {
      this.defines();
      this.createListeners();
    }
    defines() {
      const _0x33da90 = Symbol("origSkins");
      const _0x5d2d1e = Symbol("localSkins");
      Object.defineProperties(Object.prototype, {
        canvas: {
          set(_0x2a0072) {
            this._canvas = _0x2a0072;
            if (_0x2a0072.id == "game-overlay") {
              _0x43405f.overlay = this;
              _0x43405f.ctx = _0x2a0072.getContext("2d");
              Object.defineProperties(this, {
                render: {
                  set(_0x5b540f) {
                    this._render = new Proxy(_0x5b540f, {
                      apply(_0x4b292d, _0x30297c, _0x1f4b04) {
                        ["scale", "game", "controls", "renderer", "me"].forEach((_0x6fd151, _0xb7e037) => {
                          _0x43405f[_0x6fd151] = _0x1f4b04[_0xb7e037];
                        });
                        Reflect.apply(...arguments);
                        if (_0x43405f.isDefined(_0x43405f.renderer) && _0x43405f.isDefined(_0x43405f.renderer.adsFovMlt)) {
                          try {
                            _0x43405f.renderer.adsFovMlt.fill(_0x43405f.settings.weaponZoom);
                          } catch (_0x14d3d7) {
                            console.error(_0x14d3d7);
                          }
                        }
                        if (_0x43405f.me && _0x43405f.ctx) {
                          _0x43405f.ctx.save();
                          _0x43405f.ctx.scale(_0x43405f.scale, _0x43405f.scale);
                          _0x43405f.render();
                          _0x43405f.ctx.restore();
                          if (!_0x43405f.me.procInputs[_0x43405f.isProxy]) {
                            _0x43405f.me.procInputs = new Proxy(_0x43405f.me.procInputs, {
                              apply(_0xa20cfa, _0x57944c, [_0x53c335, _0x32f953, _0x1d9cdf, _0x296006]) {
                                if (_0x57944c) {
                                  _0x43405f.inputs(_0x53c335);
                                }
                                return Reflect.apply(...arguments);
                              },
                              get(_0x4763d2, _0x14d51d) {
                                if (_0x14d51d === _0x43405f.isProxy) {
                                  return true;
                                } else {
                                  return Reflect.get(_0x4763d2, _0x14d51d);
                                }
                              }
                            });
                          }
                          _0x43405f.game.map.manager.objects.filter(_0x2defa6 => {
                            return _0x2defa6.penetrable;
                          }).map((_0x5b84fd, _0x57e666, _0x4ef50f) => {
                            _0x5b84fd.transparent = _0x43405f.settings.wallbangs;
                          });
                        }
                      }
                    });
                  },
                  get() {
                    return this._render;
                  }
                }
              });
            }
          },
          get() {
            return this._canvas;
          }
        },
        OBJLoader: {
          set(_0x5a7a7c) {
            _0x43405f.three = this;
            this._value = _0x5a7a7c;
          },
          get() {
            return this._value;
          }
        },
        skins: {
          set(_0x5640ca) {
            this[_0x33da90] = _0x5640ca;
            if (this.localSkins == undefined || !this.localSkins.length) {
              this[_0x5d2d1e] = Array.apply(null, Array(25000)).map((_0x37fefd, _0x1c59e9) => {
                return {
                  ind: _0x1c59e9,
                  cnt: 1
                };
              });
            }
            return _0x5640ca;
          },
          get() {
            if (_0x43405f.settings.skinHack && this.stats) {
              return this[_0x5d2d1e];
            } else {
              return this[_0x33da90];
            }
          }
        },
        useLooseClient: {
          enumerable: false,
          get() {
            return this._ulc;
          },
          set(_0x4a871e) {
            _0x43405f.config = this;
            Object.defineProperty(this, "nameVisRate", {
              value: 0,
              writable: false,
              configurable: true
            });
            this._ulc = _0x4a871e;
          }
        },
        trail: {
          enumerable: false,
          get() {
            return _0x43405f.settings.alwaysTrail || this._trail;
          },
          set(_0x4dcb4e) {
            this._trail = _0x4dcb4e;
          }
        },
        showTracers: {
          enumerable: false,
          get() {
            return _0x43405f.settings.alwaysTrail || this._showTracers;
          },
          set(_0x49005f) {
            this._showTracers = _0x49005f;
          }
        },
        shaderId: {
          enumerable: false,
          get() {
            if (this.src && this.src.startsWith("pubs/")) {
              if (_0x43405f.settings.animatedBillboards) {
                return 1;
              } else {
                return this.rshaderId;
              }
            } else {
              return this.rshaderId;
            }
          },
          set(_0x12f78a) {
            this.rshaderId = _0x12f78a;
          }
        },
        idleTimer: {
          enumerable: false,
          get() {
            if (_0x43405f.settings.antikick) {
              return 0;
            } else {
              return this._idleTimer;
            }
          },
          set(_0x3a34f4) {
            this._idleTimer = _0x3a34f4;
          }
        },
        kickTimer: {
          enumerable: false,
          get() {
            if (_0x43405f.settings.antikick) {
              return Infinity;
            } else {
              return this._kickTimer;
            }
          },
          set(_0x1a9669) {
            this._kickTimer = _0x1a9669;
          }
        },
        cnBSeen: {
          set(_0x2f8af4) {
            this.inView = _0x2f8af4;
          },
          get() {
            let _0x3eb32e = !_0x43405f.isDefined(_0x43405f.me) || !_0x43405f.me.team || _0x43405f.me.team != this.team;
            return this.inView || _0x3eb32e && _0x43405f.state.nameTags;
          }
        },
        canBSeen: {
          set(_0x5b91a2) {
            this.inView2 = _0x5b91a2;
          },
          get() {
            return this.inView2 || _0x43405f.settings.botNametags;
          }
        },
        events: {
          set(_0x8cfd79) {
            this._events = _0x8cfd79;
            if (this.ahNum !== 0) {
              return;
            }
            _0x43405f.wsSend = this.send.bind(this);
            _0x43405f.wsEvent = this._dispatchEvent.bind(this);
            _0x43405f.socket = this;
            this.send = new Proxy(this.send, {
              apply(_0x15e154, _0x329000, [_0xe2771b, _0x5ab418]) {
                if (_0xe2771b === "en") {
                  _0x43405f.skins = {
                    main: _0x5ab418[2][0],
                    secondary: _0x5ab418[2][1],
                    hat: _0x5ab418[3],
                    body: _0x5ab418[4],
                    knife: _0x5ab418[9],
                    dye: _0x5ab418[14],
                    waist: _0x5ab418[17]
                  };
                }
                return Reflect.apply(...arguments);
              }
            });
            this._dispatchEvent = new Proxy(this._dispatchEvent, {
              apply(_0x27b2b5, _0x313adf, [_0x5437de, _0x4cd116]) {
                if (_0x43405f.settings.skinHack && _0x5437de === "0") {
                  let _0x45ce32 = _0x4cd116[0];
                  let _0x24110d = 38;
                  while (_0x45ce32.length % _0x24110d !== 0) {
                    _0x24110d++;
                  }
                  for (let _0x661b1d = 0; _0x661b1d < _0x45ce32.length; _0x661b1d += _0x24110d) {
                    _0x45ce32[_0x661b1d + 12] = [_0x43405f.skins.main, _0x43405f.skins.secondary];
                    _0x45ce32[_0x661b1d + 13] = _0x43405f.skins.hat;
                    _0x45ce32[_0x661b1d + 14] = _0x43405f.skins.body;
                    _0x45ce32[_0x661b1d + 19] = _0x43405f.skins.knife;
                    _0x45ce32[_0x661b1d + 24] = _0x43405f.skins.dye;
                    _0x45ce32[_0x661b1d + 33] = _0x43405f.skins.waist;
                  }
                }
                return Reflect.apply(...arguments);
              }
            });
          },
          get() {
            return this._events;
          }
        },
        thirdPerson: {
          set(_0x29ae97) {
            this._thirdPerson = _0x29ae97;
          },
          get() {
            return this._thirdPerson || _0x43405f.settings.thirdPerson;
          }
        }
      });
    }
    createListeners() {
      this.loadSettings();
      this.waitFor(() => window.instructionsUpdate).then(_0x43e542 => {
        this.createObserver(_0x43e542, "style", _0x58fee9 => {
          if (location.host == "krunker.io" && _0x58fee9.textContent.includes("Connection Banned")) {
            localStorage.removeItem("krunker_token");
            alert("You have been banned, refresh cookies, and change ip, using a VPN")
          } else if (this.settings.autoServer && this.arrayTest(_0x58fee9, ["Kicked", "Banned", "Disconnected", "Error", "Game is full"], _0x3ddfc0 => _0x58fee9.innerHTML.includes(_0x3ddfc0))) {
            location = document.location.origin;
          }
        });
      });
      this.waitFor(() => window.windows).then(_0x14d62d => {
        this.initGUI();
      });
      document.addEventListener("DOMContentLoaded", () => {
        this.customCSS();
        const _0x20a2db = ["#aContainer, #aHolder, #endAContainer, #aMerger, #onetrust-consent-sdk { display: none !important; }", "#chatList * { user-select: text; }"];
        new Array(...document.styleSheets).map(_0x3f91ce => {
          if (_0x3f91ce.href) {
            let _0x3bf221 = /http.*?krunker.io\/css\/(\w+.css).+/.exec(_0x3f91ce.href);
            if (_0x3bf221 && _0x3bf221[1]) {
              let _0x3af717 = _0x3bf221[1];
              if (_0x3af717 && _0x3af717.includes("main_custom")) {
                _0x20a2db.forEach((_0x4995b8, _0x325b4b, _0xe0c1fa) => {
                  _0x3f91ce.insertRule(_0x4995b8);
                });
              }
            }
          }
        });
      });
      window.addEventListener("mouseup", _0x19165b => {
        if (_0x19165b.which === 2 && _0x43405f.settings.guiOnMMB) {
          _0x19165b.preventDefault();
          _0x43405f.showGUI();
        }
      });
      window.addEventListener("keyup", _0x46a33a => {
        if (this.state.pressedKeys.has(_0x46a33a.code)) {
          this.state.pressedKeys.delete(_0x46a33a.code);
        }
        if (document.activeElement.tagName !== "INPUT" && (!!window.endUI || !window.endUI.style.display) && _0x43405f.settings.keybinds) {
          switch (_0x46a33a.code) {
            case "KeyY":
              this.state.bindAimbotOn = !this.state.bindAimbotOn;
              this.wsEvent("ch", [null, "Aimbot " + (this.state.bindAimbotOn ? "on" : "off"), 1]);
              break;
            case "KeyH":
              this.settings.esp = (this.settings.esp + 1) % 4;
              this.wsEvent("ch", [null, "ESP: " + ["disabled", "nametags", "box", "full"][this.settings.esp], 1]);
              break;
          }
        }
      });
      window.addEventListener("keydown", _0x4fd88d => {
        if (_0x4fd88d.code == "F1") {
          _0x4fd88d.preventDefault();
          _0x43405f.showGUI();
        }
        if (document.activeElement.tagName == "INPUT" || !window.endUI && window.endUI.style.display) {
          return;
        }
        switch (_0x4fd88d.code) {
          case "NumpadSubtract":
            document.exitPointerLock();
            console.dirxml(this);
            break;
          default:
            if (!this.state.pressedKeys.has(_0x4fd88d.code)) {
              this.state.pressedKeys.add(_0x4fd88d.code);
            }
            break;
        }
      });
    }
    loadSettings() {
      let _0x277933 = {};
      try {
        _0x277933 = JSON.parse(window.localStorage.getItem("dogeware"));
      } catch (_0x5c721a) {
        let _0x3c2c8f = document.cookie.split(";");
        for (let _0x167aad of _0x3c2c8f) {
          _0x167aad = _0x167aad.trim();
          if (_0x167aad.indexOf("dogeware=") == 0) {
            _0x277933 = JSON.parse(decodeURIComponent(_0x167aad.substring("dogeware=".length, _0x167aad.length)));
            break;
          }
        }
      }
      for (let _0x166c58 in _0x277933) {
        if (this.settings[_0x166c58] != undefined) {
          this.settings[_0x166c58] = _0x277933[_0x166c58];
        }
      }
      this.saveSettings(true);
    }
    deleteSettings() {
      try {
        window.localStorage.removeItemonload("dogeware");
        location.reload();
      } catch (_0x21e7a4) {}
    }
    saveSettings(_0x20eab6) {
      try {
        window.localStorage.setItem("dogeware", JSON.stringify(this.settings));
      } catch (_0xe28d70) {
        let _0xb10a90 = new Date();
        _0xb10a90.setTime(_0xb10a90.getTime() + 31104000000);
        let _0x567757 = "expires=" + _0xb10a90.toGMTString();
        document.cookie = "dogeware=" + encodeURIComponent(JSON.stringify(this.settings)) + "; " + _0x567757;
      }
      if (_0x20eab6) {
        console.log("[Dogeware] Settings loaded：", this.settings);
      }
    }
    inputs(_0x5a1009) {
      const _0x4c17de = {
        frame: 0,
        delta: 1,
        xdir: 2,
        ydir: 3,
        moveDir: 4,
        shoot: 5,
        scope: 6,
        jump: 7,
        reload: 8,
        crouch: 9,
        weaponScroll: 10,
        weaponSwap: 11,
        moveLock: 12
      };
      this.state.frame = _0x5a1009[_0x4c17de.frame];
      this.state.nameTags = [1, 2].some(_0x5b7305 => _0x5b7305 == this.settings.esp) || this.settings.forceNametagsOn;
      if (this.me) {
        if (this.settings.autoNuke && Object.keys(this.me.streaks).length) {
          this.wsSend("k", 0);
        }
        if (this.settings.bhop) {
          if (this.state.pressedKeys.has("Space") || this.settings.bhop % 2) {
            this.controls.keys[this.controls.binds.jump.val] ^= 1;
            if (this.controls.keys[this.controls.binds.jump.val]) {
              this.controls.didPressed[this.controls.binds.jump.val] = 1;
            }
            if (this.state.pressedKeys.has("Space") || this.settings.bhop == 3) {
              if (this.me.velocity.y < -0.03 && this.me.canSlide) {
                setTimeout(() => {
                  this.controls.keys[this.controls.binds.crouch.val] = 0;
                }, this.me.slideTimer || 325);
                this.controls.keys[this.controls.binds.crouch.val] = 1;
                this.controls.didPressed[this.controls.binds.crouch.val] = 1;
              }
            }
          }
        }
        if (this.settings.forceNametagsOn) {
          try {
            Object.defineProperty(this.game.config, "nameTags", {
              get() {
                if (_0x43405f.settings.forceNametagsOn) {
                  return false;
                } else {
                  return this.game._nametags;
                }
              },
              set(_0xbc4f96) {
                this.game._nametags = _0xbc4f96;
              }
            });
          } catch (_0x16e3f9) {}
        }
        if (this.settings.spinBot) {
          const _0x35e605 = 1;
          if (_0x5a1009[_0x4c17de.moveDir] !== -1) {
            _0x5a1009[_0x4c17de.moveDir] = (_0x5a1009[_0x4c17de.moveDir] + this.state.spinCounter - Math.round(_0x5a1009[_0x4c17de.ydir] / (Math.PI * 2000) * 7)) % 7;
          }
          _0x5a1009[_0x4c17de.ydir] = this.state.spinCounter / 7 * (Math.PI * 2000);
          if (_0x5a1009[_0x4c17de.frame] % _0x35e605 === 0) {
            this.state.spinCounter = (this.state.spinCounter + 1) % 7;
          }
        }
        if (this.settings.autoReload && this.me.ammos[this.me.weaponIndex] === 0) {
          _0x5a1009[_0x4c17de.reload] = 1;
        }
        if (this.settings.pitchHack) {
          switch (this.settings.pitchHack) {
            case 1:
              _0x5a1009[_0x4c17de.xdir] = -Math.PI * 500;
              break;
            case 2:
              _0x5a1009[_0x4c17de.xdir] = Math.PI * 500;
              break;
            case 3:
              _0x5a1009[_0x4c17de.xdir] = Math.sin(Date.now() / 50) * Math.PI * 500;
              break;
            case 4:
              _0x5a1009[_0x4c17de.xdir] = Math.sin(Date.now() / 250) * Math.PI * 500;
              break;
            case 5:
              _0x5a1009[_0x4c17de.xdir] = _0x5a1009[_0x4c17de.frame] % 2 ? Math.PI * 500 : -Math.PI * 500;
              break;
            case 6:
              _0x5a1009[_0x4c17de.xdir] = (Math.random() * Math.PI - Math.PI / 2) * 1000;
              break;
          }
        }
        const _0x23930f = () => (Math.random() * 2 - 1) * this.settings.aimNoise;
        this.game.players.list.forEach(_0x273eaa => {
          _0x273eaa.pos = {
            x: _0x273eaa.x,
            y: _0x273eaa.y,
            z: _0x273eaa.z
          };
          _0x273eaa.npos = {
            x: _0x273eaa.x + _0x23930f(),
            y: _0x273eaa.y + _0x23930f(),
            z: _0x273eaa.z + _0x23930f()
          };
          _0x273eaa.isTarget = false;
        });
        function _0x304145(_0x5eb10d, _0x963c76) {
          if (_0x5eb10d?.name === _0x963c76) {
            return _0x5eb10d;
          }
          for (const _0x324fc1 of _0x5eb10d.children) {
            const _0x357839 = _0x304145(_0x324fc1, _0x963c76);
            if (_0x357839) {
              return _0x357839;
            }
          }
          return null;
        }
        if (this.game.AI.ais) {
          this.game.AI.ais.forEach(_0x1275dd => {
            if (_0x1275dd.mesh) {
              const _0xc7b0e8 = _0x304145(_0x1275dd.mesh, "Head");
              if (_0xc7b0e8) {
                const _0x8b2413 = {
                  ..._0xc7b0e8.getWorldPosition()
                };
                _0x8b2413.y -= 8;
                return _0x1275dd.npos = _0x1275dd.pos = _0x8b2413;
              }
            }
            _0x1275dd.npos = _0x1275dd.pos = {
              x: _0x1275dd.x,
              y: _0x1275dd.y,
              z: _0x1275dd.z
            };
          });
        }
        if (this.renderer && this.renderer.frustum && this.me.active) {
          this.controls.target = null;
          let _0x2e787c = this.game.players.list.filter(_0x1ccbf1 => !_0x1ccbf1.isYTMP && _0x1ccbf1.hasOwnProperty("npos") && (!this.settings.frustumCheck || this.containsPoint(_0x1ccbf1.npos)) && (this.me.team === null || _0x1ccbf1.team !== this.me.team) && _0x1ccbf1.health > 0 && _0x1ccbf1.inView).sort((_0x353da4, _0xe62de1) => this.getDistance(this.me.x, this.me.z, _0x353da4.npos.x, _0x353da4.npos.z) - this.getDistance(this.me.x, this.me.z, _0xe62de1.npos.x, _0xe62de1.npos.z));
          let _0x378fc6 = false;
          if (this.game.AI.ais && this.settings.AImbot) {
            let _0x2dda3b = this.game.AI.ais.filter(_0x1259ad => _0x1259ad.mesh && _0x1259ad.mesh.visible && _0x1259ad.health && _0x1259ad.pos && _0x1259ad.inView2 && _0x1259ad.team !== this.me.team).sort((_0x34748f, _0x7080b8) => this.getDistance(this.me.x, this.me.z, _0x34748f.pos.x, _0x34748f.pos.z) - this.getDistance(this.me.x, this.me.z, _0x7080b8.pos.x, _0x7080b8.pos.z));
            _0x2e787c.push(..._0x2dda3b);
          }
          let _0x2eb65b = _0x2e787c[0];
          if (this.settings.fovbox) {
            const _0xea3a01 = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
            const _0x10c561 = innerWidth / _0xea3a01;
            const _0x3ad11d = innerHeight / _0xea3a01;
            let _0x562898 = false;
            for (let _0xd412f = 0; _0xd412f < _0x2e787c.length; _0xd412f++) {
              const _0x470f0c = _0x2e787c[_0xd412f];
              const _0x56ccca = this.world2Screen(new this.three.Vector3(_0x470f0c.x, _0x470f0c.y, _0x470f0c.z), _0x10c561, _0x3ad11d, _0x470f0c.height / 2);
              let _0x3ceeba = [_0x10c561 / 3, _0x3ad11d / 4, _0x10c561 * (1 / 3), _0x3ad11d / 2];
              switch (this.settings.fovBoxSize) {
                case 2:
                  _0x3ceeba = [_0x10c561 * 0.4, _0x3ad11d / 3, _0x10c561 * 0.2, _0x3ad11d / 3];
                  break;
                case 3:
                  _0x3ceeba = [_0x10c561 * 0.45, _0x3ad11d * 0.4, _0x10c561 * 0.1, _0x3ad11d * 0.2];
                  break;
              }
              if (_0x56ccca.x >= _0x3ceeba[0] && _0x56ccca.x <= _0x3ceeba[0] + _0x3ceeba[2] && _0x56ccca.y >= _0x3ceeba[1] && _0x56ccca.y < _0x3ceeba[1] + _0x3ceeba[3]) {
                _0x2eb65b = _0x2e787c[_0xd412f];
                _0x562898 = true;
                break;
              }
            }
            if (!_0x562898) {
              _0x2eb65b = void "kpal";
            }
          }
          const _0x1af98a = _0x5a1009[_0x4c17de.shoot];
          if (_0x2eb65b && this.settings.aimbot && this.state.bindAimbotOn && (!this.settings.aimbotRange || this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x2eb65b.x, _0x2eb65b.y, _0x2eb65b.z) < this.settings.aimbotRange) && (!this.settings.rangeCheck || this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x2eb65b.x, _0x2eb65b.y, _0x2eb65b.z) <= this.me.weapon.range) && !this.me.reloadTimer) {
            if (this.settings.awtv) {
              _0x5a1009[_0x4c17de.scope] = 1;
            }
            _0x2eb65b.isTarget = this.settings.markTarget;
            const _0x4e5ccf = (this.getDir(this.me.z, this.me.x, _0x2eb65b.npos.z, _0x2eb65b.npos.x) || 0) * 1000;
            const _0x308000 = _0x2eb65b.isAI ? ((this.getXDir(this.me.x, this.me.y, this.me.z, _0x2eb65b.npos.x, _0x2eb65b.npos.y, _0x2eb65b.npos.z) || 0) - this.me.recoilAnimY * 0.3) * 1000 : ((this.getXDir(this.me.x, this.me.y, this.me.z, _0x2eb65b.npos.x, _0x2eb65b.npos.y - _0x2eb65b.crouchVal * 3 + this.me.crouchVal * 3 + this.settings.aimOffset, _0x2eb65b.npos.z) || 0) - this.me.recoilAnimY * 0.3) * 1000;
            if (this.settings.forceUnsilent) {
              this.controls.target = {
                xD: _0x308000 / 1000,
                yD: _0x4e5ccf / 1000
              };
              this.controls.update(400);
            }
            switch (this.settings.aimbot) {
              case 1:
              case 2:
              case 5:
              case 6:
              case 9:
              case 10:
                {
                  let _0x3cde96 = [5, 6, 9].some(_0x40b0d1 => _0x40b0d1 == this.settings.aimbot);
                  if (this.settings.aimbot === 5 && _0x5a1009[_0x4c17de.scope] || this.settings.aimbot === 10) {
                    this.controls.target = {
                      xD: _0x308000 / 1000,
                      yD: _0x4e5ccf / 1000
                    };
                    this.controls.update(400);
                  }
                  if ([2, 10].some(_0x38c7f5 => _0x38c7f5 == this.settings.aimbot) || this.settings.aimbot === 1 && this.me.weapon.id) {
                    if (!this.me.weapon.melee) {
                      _0x5a1009[_0x4c17de.scope] = 1;
                    }
                  }
                  if (this.me.didShoot) {
                    _0x5a1009[_0x4c17de.shoot] = 0;
                    this.state.quickscopeCanShoot = false;
                    setTimeout(() => {
                      this.state.quickscopeCanShoot = true;
                    }, this.me.weapon.rate * 0.85);
                  } else if (this.state.quickscopeCanShoot && (!_0x3cde96 || _0x5a1009[_0x4c17de.scope])) {
                    if (!this.me.weapon.melee) {
                      _0x5a1009[_0x4c17de.scope] = 1;
                    }
                    if (!this.settings.superSilent && this.settings.aimbot !== 9) {
                      _0x5a1009[_0x4c17de.ydir] = _0x4e5ccf;
                      _0x5a1009[_0x4c17de.xdir] = _0x308000;
                    }
                    if (this.settings.aimbot !== 9 && (!this.me.aimVal || this.me.weapon.noAim || this.me.weapon.melee) || this.settings.aimbot === 9 && _0x1af98a) {
                      _0x5a1009[_0x4c17de.ydir] = _0x4e5ccf;
                      _0x5a1009[_0x4c17de.xdir] = _0x308000;
                      _0x5a1009[_0x4c17de.shoot] = 1;
                    }
                  }
                }
                break;
              case 4:
              case 7:
              case 8:
              case 11:
                if (_0x5a1009[_0x4c17de.scope] || this.settings.aimbot === 11) {
                  this.controls.target = {
                    xD: _0x308000 / 1000,
                    yD: _0x4e5ccf / 1000
                  };
                  this.controls.update({
                    4: 400,
                    7: 110,
                    8: 70,
                    11: 400
                  }[this.settings.aimbot]);
                  if ([4, 11].some(_0x551a03 => _0x551a03 == this.settings.aimbot)) {
                    _0x5a1009[_0x4c17de.xdir] = _0x308000;
                    _0x5a1009[_0x4c17de.ydir] = _0x4e5ccf;
                  }
                  if (this.me.didShoot) {
                    _0x5a1009[_0x4c17de.shoot] = 0;
                    this.state.quickscopeCanShoot = false;
                    setTimeout(() => {
                      this.state.quickscopeCanShoot = true;
                    }, this.me.weapon.rate * 0.85);
                  } else if (this.state.quickscopeCanShoot) {
                    _0x5a1009[this.me.weapon.melee ? _0x4c17de.shoot : _0x4c17de.scope] = 1;
                  }
                } else {
                  this.controls.target = null;
                }
                break;
              case 12:
                {
                  if (!this.three || !this.renderer || !this.renderer.camera || !this.game || !this.game.players || !this.game.players.list.length || !_0x5a1009[_0x4c17de.scope] || this.me.aimVal) {
                    break;
                  }
                  if (!this.state.raycaster) {
                    this.state.raycaster = new this.three.Raycaster();
                    this.state.mid = new this.three.Vector2(0, 0);
                  }
                  const _0x3e05c0 = [];
                  for (let _0xdb9229 = 0; _0xdb9229 < this.game.players.list.length; _0xdb9229++) {
                    let _0x5b3d57 = this.game.players.list[_0xdb9229];
                    if (!_0x5b3d57 || !_0x5b3d57.objInstances || _0x5b3d57.isYTMP || this.me.team !== null && _0x5b3d57.team === this.me.team || !_0x5b3d57.inView) {
                      continue;
                    }
                    _0x3e05c0.push(_0x5b3d57.objInstances);
                  }
                  const _0x5ca1a7 = this.state.raycaster;
                  _0x5ca1a7.setFromCamera(this.state.mid, this.renderer.camera);
                  if (_0x5ca1a7.intersectObjects(_0x3e05c0, true).length) {
                    _0x5a1009[_0x4c17de.shoot] = this.me.didShoot ? 0 : 1;
                  }
                }
                break;
            }
          } else {
            if (this.settings.uwtv) {
              _0x5a1009[_0x4c17de.scope] = 0;
            }
            this.state.spinFrame = 0;
          }
        }
        if (this.settings.alwaysAim) {
          _0x5a1009[_0x4c17de.scope] = 1;
        }
        if (this.settings.preventMeleeThrowing && this.me.weapon.melee) {
          _0x5a1009[_0x4c17de.scope] = 0;
        }
      }
      return _0x5a1009;
    }
    render() {
      var _0x439e9a = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
      let _0x2d1277 = innerWidth / _0x439e9a;
      let _0x5468ea = innerHeight / _0x439e9a;
      let _0xb87156 = (_0x135671, _0x3db313 = 0) => {
        _0x135671.y += _0x3db313;
        _0x135671.project(this.renderer.camera);
        _0x135671.x = (_0x135671.x + 1) / 2;
        _0x135671.y = (-_0x135671.y + 1) / 2;
        _0x135671.x *= _0x2d1277;
        _0x135671.y *= _0x5468ea;
        return _0x135671;
      };
      let _0x222688 = (_0x299028, _0x4a7678, _0x3d956f, _0x4386fa, _0x17c8cd, _0x40a711) => {
        this.ctx.save();
        this.ctx.lineWidth = _0x17c8cd + 2;
        this.ctx.beginPath();
        this.ctx.moveTo(_0x299028, _0x4a7678);
        this.ctx.lineTo(_0x3d956f, _0x4386fa);
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
        this.ctx.stroke();
        this.ctx.lineWidth = _0x17c8cd;
        this.ctx.strokeStyle = _0x40a711;
        this.ctx.stroke();
        this.ctx.restore();
      };
      let _0x211a11 = (_0x161709, _0x255cba, _0x4d830f, _0x9d5c70, _0x58ed9f, _0x551c72, _0x363ede, _0x495c8f) => {
        this.ctx.save();
        this.ctx.translate(~~_0x161709, ~~_0x255cba);
        this.ctx.beginPath();
        if (_0x495c8f) {
          this.ctx.fillStyle = _0x363ede;
        } else {
          this.ctx.strokeStyle = _0x363ede;
        }
        this.ctx.rect(_0x4d830f, _0x9d5c70, _0x58ed9f, _0x551c72);
        if (_0x495c8f) {
          this.ctx.fill();
        } else {
          this.ctx.stroke();
        }
        this.ctx.closePath();
        this.ctx.restore();
      };
      let _0x5f10c7 = _0x30b047 => {
        for (let _0x5ce699 = 0; _0x5ce699 < _0x30b047.length; _0x5ce699++) {
          _0x30b047[_0x5ce699] = ~~this.ctx.measureText(_0x30b047[_0x5ce699]).width;
        }
        return _0x30b047;
      };
      let _0xa7c07e = (_0x1023b6, _0x375e4f, _0x7450f3, _0x2364cf, _0x549c88) => {
        const _0x20bcb6 = this.ctx.createLinearGradient(_0x1023b6, _0x375e4f, _0x7450f3, _0x2364cf);
        for (let _0x1e5d40 = 0; _0x1e5d40 < _0x549c88.length; _0x1e5d40++) {
          _0x20bcb6.addColorStop(_0x1e5d40, _0x549c88[_0x1e5d40]);
        }
        return _0x20bcb6;
      };
      let _0x104f79 = (_0x131303, _0x6ac423, _0x583e44, _0x19f893, _0x17d7d3) => {
        this.ctx.save();
        this.ctx.translate(~~_0x19f893, ~~_0x17d7d3);
        this.ctx.fillStyle = _0x583e44;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.font = _0x6ac423;
        this.ctx.lineWidth = 1;
        this.ctx.strokeText(_0x131303, 0, 0);
        this.ctx.fillText(_0x131303, 0, 0);
        this.ctx.restore();
      };
      const _0x3a761b = 2;
      for (const _0xd1f053 of this.game.players.list.filter(_0x4647ac => !_0x4647ac.isYTMP && _0x4647ac.active && (_0x4647ac.pos = {
        x: _0x4647ac.x,
        y: _0x4647ac.y,
        z: _0x4647ac.z
      }))) {
        const _0xb769 = new this.three.Vector3(_0xd1f053.pos.x, _0xd1f053.pos.y, _0xd1f053.pos.z);
        const _0x108bdd = _0xb87156(_0xb769.clone());
        const _0x2a7912 = _0xb87156(_0xb769.clone(), _0xd1f053.height);
        const _0xb69595 = ~~(_0x108bdd.y - _0x2a7912.y);
        const _0x53ef8b = ~~(_0xb69595 * 0.6);
        const _0x59eaf0 = this.settings.espFontSize + "px GameFont";
        const _0x3ffa72 = this.me.team === null || _0xd1f053.team !== this.me.team;
        if (!this.containsPoint(_0xd1f053.pos)) {
          continue;
        }
        if (this.settings.tracers) {
          _0x222688(_0x2d1277 / 2, _0x43405f.settings.tracers === 2 ? _0x5468ea / 2 : _0x5468ea - 1, _0x108bdd.x, _0x108bdd.y, 2, _0xd1f053.team === null ? "#FF4444" : _0xd1f053.team === this.me.team ? "#44AAFF" : "#FF4444");
        }
        const _0x3d9193 = _0xd1f053.objInstances;
        if (this.isDefined(_0x3d9193)) {
          if (!_0x3d9193.visible) {
            Object.defineProperty(_0xd1f053.objInstances, "visible", {
              value: true,
              writable: false
            });
          } else {
            let _0x42a069 = this.settings.chams;
            if (_0x43405f.gaybow >= 360) {
              _0x43405f.gaybow = 0;
            } else {
              _0x43405f.gaybow++;
            }
            _0x3d9193.traverse(_0x393f3e => {
              if (_0x393f3e && _0x393f3e.type == "Mesh" && this.isDefined(_0x393f3e.material)) {
                if (!_0x393f3e.hasOwnProperty(this.hash)) {
                  _0x393f3e[this.hash] = _0x393f3e.material;
                } else if (_0x393f3e.hasOwnProperty(this.hash)) {
                  Object.defineProperty(_0x393f3e, "material", {
                    get() {
                      if (!_0x42a069 || !_0x3ffa72 && !_0x43405f.settings.teamChams) {
                        return this[_0x43405f.hash];
                      } else {
                        return new _0x43405f.three.MeshBasicMaterial({
                          color: new _0x43405f.three.Color(_0x43405f.settings.chamsCol == 12 ? "hsl(" + _0x43405f.gaybow + ",100%, 50%)" : Object.values(_0x43405f.colors)[_0x43405f.settings.chamsCol]),
                          depthTest: false,
                          transparent: true,
                          fog: false,
                          wireframe: _0x43405f.settings.wireframe
                        });
                      }
                    }
                  });
                }
              }
            });
          }
        }
        if (this.settings.esp > 1) {
          if (_0xd1f053.isTarget) {
            this.ctx.save();
            const _0x529ff6 = _0x5f10c7(["TARGET"]);
            _0x104f79("TARGET", _0x59eaf0, "#FFFFFF", _0x2a7912.x - _0x529ff6[0] / 2, _0x2a7912.y - this.settings.espFontSize * 1.5);
            this.ctx.beginPath();
            this.ctx.translate(_0x2a7912.x, _0x2a7912.y + Math.abs(_0xb69595 / 2));
            this.ctx.arc(0, 0, Math.abs(_0xb69595 / 2) + 10, 0, Math.PI * 2);
            this.ctx.strokeStyle = "#FFFFFF";
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
          }
          if (this.settings.esp === 2) {
            this.ctx.save();
            this.ctx.strokeStyle = this.me.team === null || _0xd1f053.team !== this.me.team ? "#FF4444" : "#44AAFF";
            this.ctx.strokeRect(_0x2a7912.x - _0x53ef8b / 2, _0x2a7912.y, _0x53ef8b, _0xb69595);
            this.ctx.restore();
            continue;
          }
          _0x211a11(_0x2a7912.x - _0x53ef8b / 2 - 7, ~~_0x2a7912.y - 1, 0, 0, 4, _0xb69595 + 2, "#000000", false);
          _0x211a11(_0x2a7912.x - _0x53ef8b / 2 - 7, ~~_0x2a7912.y - 1, 0, 0, 4, _0xb69595 + 2, "#44FF44", true);
          _0x211a11(_0x2a7912.x - _0x53ef8b / 2 - 7, ~~_0x2a7912.y - 1, 0, 0, 4, ~~((_0xd1f053.maxHealth - _0xd1f053.health) / _0xd1f053.maxHealth * (_0xb69595 + 2)), "#000000", true);
          this.ctx.save();
          this.ctx.lineWidth = 4;
          this.ctx.translate(~~(_0x2a7912.x - _0x53ef8b / 2), ~~_0x2a7912.y);
          this.ctx.beginPath();
          this.ctx.rect(0, 0, _0x53ef8b, _0xb69595);
          this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
          this.ctx.stroke();
          this.ctx.lineWidth = 2;
          this.ctx.strokeStyle = _0xd1f053.team === null ? "#FF4444" : this.me.team === _0xd1f053.team ? "#44AAFF" : "#FF4444";
          this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.restore();
          const _0x4c14e6 = ~~(this.getDistance3D(this.me.x, this.me.y, this.me.z, _0xd1f053.pos.x, _0xd1f053.pos.y, _0xd1f053.pos.z) / 10);
          this.ctx.save();
          this.ctx.font = _0x59eaf0;
          const _0x100d73 = _0x5f10c7(["[", _0x4c14e6, "m]", _0xd1f053.level, "©", _0xd1f053.name]);
          this.ctx.restore();
          const _0x8e44a4 = _0xa7c07e(0, 0, _0x100d73[4] * 5, 0, ["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"]);
          if (_0xd1f053.level) {
            const _0x6c753d = _0xa7c07e(0, 0, _0x100d73[4] * 2 + _0x100d73[3] + _0x3a761b * 3, 0, ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.25)"]);
            _0x211a11(~~(_0x2a7912.x - _0x53ef8b / 2) - 12 - _0x100d73[4] * 2 - _0x100d73[3] - _0x3a761b * 3, ~~_0x2a7912.y - _0x3a761b, 0, 0, _0x100d73[4] * 2 + _0x100d73[3] + _0x3a761b * 3, _0x100d73[4] + _0x3a761b * 2, _0x6c753d, true);
            _0x104f79("" + _0xd1f053.level, _0x59eaf0, "#FFFFFF", ~~(_0x2a7912.x - _0x53ef8b / 2) - 16 - _0x100d73[3], ~~_0x2a7912.y + _0x100d73[4] * 1);
          }
          _0x211a11(~~(_0x2a7912.x + _0x53ef8b / 2) + _0x3a761b, ~~_0x2a7912.y - _0x3a761b, 0, 0, _0x100d73[4] * 5, _0x100d73[4] * 4 + _0x3a761b * 2, _0x8e44a4, true);
          _0x104f79(_0xd1f053.name, _0x59eaf0, _0xd1f053.team === null ? "#FFCDB4" : this.me.team === _0xd1f053.team ? "#B4E6FF" : "#FFCDB4", _0x2a7912.x + _0x53ef8b / 2 + 4, _0x2a7912.y + _0x100d73[4] * 1);
          if (_0xd1f053.clan) {
            _0x104f79("[" + _0xd1f053.clan + "]", _0x59eaf0, "#AAAAAA", _0x2a7912.x + _0x53ef8b / 2 + 8 + _0x100d73[5], _0x2a7912.y + _0x100d73[4] * 1);
          }
          _0x104f79(_0xd1f053.health + " HP", _0x59eaf0, "#33FF33", _0x2a7912.x + _0x53ef8b / 2 + 4, _0x2a7912.y + _0x100d73[4] * 2);
          _0x104f79(_0xd1f053.weapon.name, _0x59eaf0, "#DDDDDD", _0x2a7912.x + _0x53ef8b / 2 + 4, _0x2a7912.y + _0x100d73[4] * 3);
          _0x104f79("[", _0x59eaf0, "#AAAAAA", _0x2a7912.x + _0x53ef8b / 2 + 4, _0x2a7912.y + _0x100d73[4] * 4);
          _0x104f79("" + _0x4c14e6, _0x59eaf0, "#DDDDDD", _0x2a7912.x + _0x53ef8b / 2 + 4 + _0x100d73[0], _0x2a7912.y + _0x100d73[4] * 4);
          _0x104f79("m]", _0x59eaf0, "#AAAAAA", _0x2a7912.x + _0x53ef8b / 2 + 4 + _0x100d73[0] + _0x100d73[1], _0x2a7912.y + _0x100d73[4] * 4);
        }
      }
      if (this.settings.fovbox && this.settings.drawFovbox) {
        let _0x2e9a54 = [_0x2d1277 / 3, _0x5468ea / 4, _0x2d1277 * (1 / 3), _0x5468ea / 2];
        switch (this.settings.fovBoxSize) {
          case 2:
            _0x2e9a54 = [_0x2d1277 * 0.4, _0x5468ea / 3, _0x2d1277 * 0.2, _0x5468ea / 3];
            break;
          case 3:
            _0x2e9a54 = [_0x2d1277 * 0.45, _0x5468ea * 0.4, _0x2d1277 * 0.1, _0x5468ea * 0.2];
            break;
        }
        this.ctx.save();
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(..._0x2e9a54);
        this.ctx.restore();
      }
    }
    customCSS() {
      if (!this.isDefined(this.CSSres) && this.settings.kpalCSS) {
        this.CSSres.rel = "stylesheet";
        this.CSSres.disabled = false;
        (document.head || document.getElementsByTagName("head")[0]).appendChild(this.CSSres);
      }
      if (this.settings.customCSS.startsWith("http") && this.settings.customCSS.endsWith(".css")) {
        this.CSSres.href = this.settings.customCSS;
      } else {
        this.CSSres = undefined;
      }
    }
    initGUI() {
      function _0x5b1b99(_0x5c0bf7, _0x4b7a47, _0x91cdc) {
        const _0x3b18b1 = document.querySelector("#menuItemContainer");
        const _0x49d4a6 = document.createElement("div");
        const _0x1d7118 = document.createElement("div");
        const _0x26deda = document.createElement("div");
        _0x49d4a6.className = "menuItem";
        _0x1d7118.className = "menuItemIcon";
        _0x26deda.className = "menuItemTitle";
        _0x26deda.innerHTML = _0x5c0bf7;
        _0x1d7118.style.backgroundImage = "url(\"https://media.discordapp.net/attachments/1136080153596936295/1200257908525502515/server_icon.png?ex=65c58649&is=65b31149&hm=1e3d347707c19a80edbda8da237bb0180a98e782590df26d0e2d0fee82e9e836&=&format=webp&quality=lossless&width=190&height=151\")";
        _0x1d7118.style.width = "50px";
        _0x1d7118.style.height = "50px";
        _0x1d7118.style.backgroundSize = "contain";
        _0x49d4a6.append(_0x1d7118, _0x26deda);
        _0x3b18b1.append(_0x49d4a6);
        _0x49d4a6.addEventListener("click", _0x91cdc);
      }
      _0x43405f.GUI.setSetting = function (_0x23e952, _0x2a441b) {
        switch (_0x23e952) {
          case "customCSS":
            _0x43405f.settings.customCSS = _0x2a441b;
            _0x43405f.customCSS();
            break;
          default:
            console.log("SET ", _0x23e952, " ", _0x2a441b);
            _0x43405f.settings[_0x23e952] = _0x2a441b;
        }
        _0x43405f.saveSettings();
      };
      _0x43405f.GUI.settings = {
        aimbot: {
          val: this.settings.aimbot
        }
      };
      _0x43405f.GUI.windowObj = {
        header: "CH33T",
        html: "",
        gen() {
          return _0x43405f.getGuiHtml();
        }
      };
      window.windows = {
        ...window.windows,
        length: window.windows.length
      };
      Object.setPrototypeOf(window.windows, Array.prototype);
      _0x43405f.GUI.windowIndex = window.windows.length + 1;
      Object.defineProperty(window.windows, window.windows.length, {
        value: _0x43405f.GUI.windowObj
      });
      if (this.settings.showGuiButton) {
        _0x5b1b99("CH33TS", null, () => {
          window.showWindow(_0x43405f.GUI.windowIndex);
        });
      }
    }
    showGUI() {
      if (document.pointerLockElement || document.mozPointerLockElement) {
        document.exitPointerLock();
      }
      window.showWindow(this.GUI.windowIndex);
    }
    getGuiHtml() {
      const _0x9d54af = {
        checkbox: (_0x48f283, _0x99a932, _0x2c2b3b = "", _0x5c5278 = false) => "<div class=\"settName\" title=\"" + _0x2c2b3b + "\">" + _0x48f283 + " " + (_0x5c5278 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<label class=\"switch\" style=\"margin-left:10px\"><input type=\"checkbox\" onclick='" + this.hash + ".GUI.setSetting(\"" + _0x99a932 + "\", this.checked)' " + (_0x43405f.settings[_0x99a932] ? "checked" : "") + "><span class=\"slider\"></span></label></div>",
        client_setting: (_0x47fc3e, _0x488931, _0x40f2e6 = "", _0x2cd4de = true) => "<div class=\"settName\" title=\"" + _0x40f2e6 + "\">" + _0x47fc3e + " " + (_0x2cd4de ? "<span style=\"color: #eb5656\">*</span>" : "") + "<label class=\"switch\" style=\"margin-left:10px\"><input type=\"checkbox\" onclick='doge_setsetting(\"" + _0x488931 + "\", this.checked?\"1\":\"0\")' " + (_0x43405f.settings[_0x488931] ? "checked" : "") + "><span class=\"slider\"></span></label></div>",
        select: (_0x50eb6e, _0x54b040, _0xa1b776, _0x732256 = "", _0x535509 = false) => {
          let _0x5abd0f = "<div class=\"settName\" title=\"" + _0x732256 + "\">" + _0x50eb6e + " " + (_0x535509 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<select onchange='" + this.hash + ".GUI.setSetting(\"" + _0x54b040 + "\", parseInt(this.value))' class=\"inputGrey2\">";
          for (const _0x9c4ce0 in _0xa1b776) {
            if (_0xa1b776.hasOwnProperty(_0x9c4ce0)) {
              _0x5abd0f += "<option value=\"" + _0xa1b776[_0x9c4ce0] + "\" " + (_0x43405f.settings[_0x54b040] == _0xa1b776[_0x9c4ce0] ? "selected" : "") + ">" + _0x9c4ce0 + "</option>,";
            }
          }
          return _0x5abd0f + "</select></div>";
        },
        slider: (_0x380f79, _0x812801, _0x191cae, _0x54ebf0, _0x171abc, _0x110207 = "") => "<div class=\"settName\" title=\"" + _0x110207 + "\">" + _0x380f79 + " <input type=\"number\" class=\"sliderVal\" id=\"slid_input_" + _0x812801 + "\" min=\"" + _0x191cae + "\" max=\"" + _0x54ebf0 + "\" value=\"" + _0x43405f.settings[_0x812801] + "\" onkeypress=\"" + this.hash + ".GUI.setSetting('" + _0x812801 + "', parseFloat(this.value.replace(',', '.')));document.querySelector('#slid_input_" + _0x812801 + "').value=this.value\" style=\"margin-right:0;border-width:0\"><div class=\"slidecontainer\" style=\"\"><input type=\"range\" id=\"slid_" + _0x812801 + "\" min=\"" + _0x191cae + "\" max=\"" + _0x54ebf0 + "\" step=\"" + _0x171abc + "\" value=\"" + _0x43405f.settings[_0x812801] + "\" class=\"sliderM\" oninput=\"" + this.hash + ".GUI.setSetting('" + _0x812801 + "', parseFloat(this.value));document.querySelector('#slid_input_" + _0x812801 + "').value=this.value\"></div></div>",
        input: (_0x41c060, _0x5ed23c, _0x5562a1, _0x2eb4fd, _0x26eef5) => "<div class=\"settName\" title=\"" + _0x2eb4fd + "\">" + _0x41c060 + " <input type=\"" + _0x5562a1 + "\" name=\"" + _0x5562a1 + "\" id=\"slid_utilities_" + _0x5ed23c + "\"\n" + (_0x5562a1 == "color" ? "style=\"float:right;margin-top:5px\"" : "class=\"inputGrey2\" placeholder=\"" + _0x26eef5 + "\"") + "\nvalue=\"" + _0x43405f.settings[_0x5ed23c] + "\" oninput=\"" + this.hash + ".GUI.setSetting('" + _0x5ed23c + "', this.value)\"/></div>",
        label: (_0x4cbb07, _0x37c2c2) => "<br><span style='color: black; font-size: 20px; margin: 20px 0'>" + _0x4cbb07 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (_0x37c2c2 || "") + "</span><br>",
        nobrlabel: (_0x210fa9, _0x2272fd) => "<span style='color: black; font-size: 20px; margin: 20px 0'>" + _0x210fa9 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (_0x2272fd || "") + "</span><br>",
        br: () => "<br>",
        style: _0x7e261c => "<style>" + _0x7e261c + "</style>"
      };
      let _0x2a4cd2 = "<div id=\"settHolder\">\n<img src=\"https://github.com/DevTech-Services/DevHaxx/blob/main/haxx.png?raw=true\" width=\"100%\">\n";
      Object.keys(_0x9d54af).forEach(_0x227512 => {
        const _0x409471 = _0x9d54af[_0x227512];
        _0x9d54af[_0x227512] = function () {
          _0x2a4cd2 += _0x409471.apply(this, arguments);
          return "";
        };
      });
      const _0x3d9262 = ["Weapon", "Wallhack", "Visual", "Tweaks", "Movement", "Other"];
      if (_0x43405f.isClient) {
        _0x3d9262.push("Client");
      }
      _0x9d54af.style(".cheatTabButton { color: black; background: #ddd; padding: 2px 7px; font-size: 15px; cursor: pointer; text-align: center; } .cheatTabActive { background: #bbb;}");
      this.GUI.changeTab = function (_0x31e62b) {
        const _0x1a585a = _0x31e62b.innerText;
        document.getElementById("cheat-tabbtn-" + _0x3d9262[_0x43405f.state.activeTab]).classList.remove("cheatTabActive");
        document.getElementById("cheat-tab-" + _0x3d9262[_0x43405f.state.activeTab]).style.display = "none";
        _0x31e62b.classList.add("cheatTabActive");
        document.getElementById("cheat-tab-" + _0x1a585a).style.display = "block";
        _0x43405f.state.activeTab = _0x3d9262.indexOf(_0x1a585a);
      };
      _0x2a4cd2 += "<table style=\"width: 100%; margin-bottom: 30px\"><tr>";
      for (let _0x7b69c6 = 0; _0x7b69c6 < _0x3d9262.length; _0x7b69c6++) {
        const _0x2cf852 = _0x3d9262[_0x7b69c6];
        _0x2a4cd2 += "<td id=\"cheat-tabbtn-" + _0x2cf852 + "\" onclick=\"" + this.hash + ".GUI.changeTab(this)\" class=\"cheatTabButton " + (_0x3d9262[_0x43405f.state.activeTab] === _0x2cf852 ? "cheatTabActive" : "") + "\">";
        _0x2a4cd2 += _0x2cf852;
        _0x2a4cd2 += "</td>";
      }
      _0x2a4cd2 += "</table></tr>";
      function _0x5b9a12(_0x4ba894, _0x5ae086) {
        _0x2a4cd2 += "<div style=\"display: " + (_0x43405f.state.activeTab === _0x4ba894 ? "block" : "none") + "\" class=\"cheat-tab\" id=\"cheat-tab-" + _0x3d9262[_0x4ba894] + "\">";
        _0x5ae086();
        _0x2a4cd2 += "</div>";
      }
      _0x5b9a12(0, () => {
        _0x9d54af.select("Aimbot [Y]", "aimbot", {
          None: 0,
          "Quickscope / Auto pick": 1,
          "Silent aimbot": 2,
          "Aim assist": 4,
          "Easy aim assist": 11,
          "SP Trigger bot": 12,
          "Silent on aim": 6,
          Smooth: 7,
          Unsilent: 10,
          "Unsilent on aim": 5,
          "Aim correction": 9
        });
        _0x9d54af.select("Spin aimbot speed", "spinAimFrames", {
          "1": 30,
          "2": 20,
          "3": 15,
          "4": 10,
          "5": 5
        });
        _0x9d54af.slider("Aim range", "aimbotRange", 0, 1000, 10, "Set above 0 to make the aimbot pick enemies only at the selected range");
        _0x9d54af.slider("Aim offset", "aimOffset", -4, 1, 0.1, "The lower it is, the lower the aimbot will shoot (0 - head, -4 - body)");
        _0x9d54af.slider("Aim noise", "aimNoise", 0, 2, 0.005, "The higher it is, the lower is the aimbot accuracy");
        _0x9d54af.checkbox("Supersilent aim", "superSilent", "Only works with quickscope and silent aim, makes it almost invisible that you're looking at somebody when you're shooting at him");
        _0x9d54af.checkbox("Aim at bots", "AImbot", "Makes the aimbot shoot at NPCs");
        _0x9d54af.checkbox("FOV check", "frustumCheck", "Makes you only shoot at enemies that are in your field of view. Prevents 180 flicks");
        _0x9d54af.checkbox("FOV box", "fovbox", "Creates a box in which enemies can be targetted, enable with FOV check");
        _0x9d54af.select("FOV box size", "fovBoxSize", {
          Big: 1,
          Medium: 2,
          Small: 3
        });
        _0x9d54af.checkbox("Wallbangs", "wallbangs", "Makes the aimbot shoot enemies behind walls");
        _0x9d54af.checkbox("Aimbot range check", "rangeCheck", "Checks if the enemy is in range of your weapon before shooting it, disable for rocket launcher");
        _0x9d54af.checkbox("Auto reload", "autoReload", "Automatically reloads your weapon when it's out of ammo");
        _0x9d54af.checkbox("Prevent melee throwing", "preventMeleeThrowing", "Prevents you from throwing your knife");
      });
      _0x5b9a12(1, () => {
        _0x9d54af.select("ESP [H]", "esp", {
          None: 0,
          Nametags: 1,
          "Box ESP": 2,
          "Full ESP": 3
        });
        _0x9d54af.select("ESP Font Size", "espFontSize", {
          "30px": 30,
          "25px": 25,
          "20px": 20,
          "15px": 15,
          "10px": 10,
          "5px": 5
        });
        _0x9d54af.select("Tracers", "tracers", {
          None: 0,
          Bottom: 1,
          Middle: 2
        }, "Draws lines to players");
        _0x9d54af.checkbox("Bot nametags", "botNametags", "Always show nametags for bots such as zombies.");
        _0x9d54af.checkbox("Mark aimbot target", "markTarget", "Shows who is the aimbot targetting at the time, useful for aim assist/aim correction");
        _0x9d54af.checkbox("Draw FOV box", "drawFovbox", "Draws the FOV box from aimbot settings");
        _0x9d54af.checkbox("Chams", "chams");
        _0x9d54af.select("Chams colour", "chamsCol", {
          White: 0,
          Black: 1,
          Purple: 2,
          Pink: 3,
          Blue: 4,
          DarkBlue: 5,
          Aqua: 6,
          Green: 7,
          Lime: 8,
          Orange: 9,
          Yellow: 10,
          Red: 11,
          Gaybow: 12
        });
        _0x9d54af.checkbox("Friendly chams", "teamChams", "Show Chams for friendly players");
        _0x9d54af.checkbox("Wireframe", "wireframe");
        _0x9d54af.slider("RGB interval", "chamsInterval", 50, 1000, 50, "How fast will the RGB chams change colour");
      });
      _0x5b9a12(2, () => {
        _0x9d54af.checkbox("Third person mode", "thirdPerson");
        _0x9d54af.checkbox("Skin hack", "skinHack", "Makes you able to use any skin in game, only shows on your side");
        _0x9d54af.checkbox("Billboard shaders", "animatedBillboards", "Disable if you get fps drops");
        _0x9d54af.checkbox("Any weapon trail", "alwaysTrail");
        _0x9d54af.slider("Weapon Zoom", "weaponZoom", 0, 20, 0.1, "Weapon Zoom Multiplier Adjust");
      });
      _0x5b9a12(3, () => {
        _0x9d54af.checkbox("Always aim", "alwaysAim", "Makes you slower and jump lower, but the aimbot can start shooting at enemies  faster. Only use if ur good at bhopping");
        _0x9d54af.checkbox("Aim when target visible", "awtv");
        _0x9d54af.checkbox("Unaim when no target visible", "uwtv");
        _0x9d54af.checkbox("Force unsilent", "forceUnsilent");
      });
      _0x5b9a12(4, () => {
        _0x9d54af.select("Auto bhop", "bhop", {
          None: 0,
          "Auto Jump": 1,
          "Key Jump": 2,
          "Auto Slide": 3,
          "Key Slide": 4
        });
        _0x9d54af.label("Only use with silent aim");
        _0x9d54af.select("Pitch hax", "pitchHack", {
          Disabled: 0,
          Downward: 1,
          Upward: 2,
          "sin(time)": 3,
          "sin(time/5)": 4,
          double: 5,
          random: 6
        }, "Only use with aimbot on");
        _0x9d54af.checkbox("Spin bot", "spinBot");
      });
      _0x5b9a12(5, () => {
        _0x9d54af.checkbox("Show GUI button", "showGuiButton", "Disable if you don't want the dog under settings to be visible");
        _0x9d54af.checkbox("GUI on middle mouse button", "guiOnMMB", "Makes it possible to open this menu by clicking the mouse wheel");
        _0x9d54af.checkbox("Keybinds", "keybinds", "Turn keybinds on/off, Aimbot - Y, ESP - H");
        _0x9d54af.checkbox("No inactivity kick", "antikick", "Disables the 'Kicked for inactivity' message (client side, but works)");
        _0x9d54af.checkbox("Auto nuke", "autoNuke", "Automatically nukes when you are able to");
        _0x9d54af.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags");
        _0x9d54af.input("Custom CSS", "customCSS", "url", "", "URL to CSS file");
      });
      if (_0x43405f.isClient) {
        _0x5b9a12(6, () => {
          _0x9d54af.nobrlabel("Restart is required after changing any of these settings");
          _0x9d54af.br();
          _0x9d54af.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync");
          _0x9d54af.client_setting("Adblock", "adblock", "Disables ads");
        });
      }
      _0x2a4cd2 += "</div>";
      return _0x2a4cd2;
    }
    getDistance(_0x3363e4, _0x10b2e7, _0x337bb2, _0xddaa8f) {
      return Math.sqrt((_0x337bb2 -= _0x3363e4) * _0x337bb2 + (_0xddaa8f -= _0x10b2e7) * _0xddaa8f);
    }
    getDistance3D(_0x3c706a, _0x3df8a7, _0x280187, _0x194a1f, _0x37e4d9, _0x1f00bb) {
      let _0x3f7321 = _0x3c706a - _0x194a1f;
      let _0x38ee00 = _0x3df8a7 - _0x37e4d9;
      let _0x4932d1 = _0x280187 - _0x1f00bb;
      return Math.sqrt(_0x3f7321 * _0x3f7321 + _0x38ee00 * _0x38ee00 + _0x4932d1 * _0x4932d1);
    }
    getXDir(_0x3d1038, _0x30ee13, _0x149f75, _0x49c00d, _0x58ef0f, _0x1d2425) {
      let _0x58a05d = Math.abs(_0x30ee13 - _0x58ef0f);
      let _0x4b4e11 = this.getDistance3D(_0x3d1038, _0x30ee13, _0x149f75, _0x49c00d, _0x58ef0f, _0x1d2425);
      return Math.asin(_0x58a05d / _0x4b4e11) * (_0x30ee13 > _0x58ef0f ? -1 : 1);
    }
    getDir(_0x511e07, _0xf0217d, _0x27628b, _0xa8a465) {
      return Math.atan2(_0xf0217d - _0xa8a465, _0x511e07 - _0x27628b);
    }
    getAngleDist(_0x18b26f, _0x254556) {
      return Math.atan2(Math.sin(_0x254556 - _0x18b26f), Math.cos(_0x18b26f - _0x254556));
    }
    containsPoint(_0x43fc07) {
      let _0x367ade = this.renderer.frustum.planes;
      for (let _0x508647 = 0; _0x508647 < 6; _0x508647++) {
        if (_0x367ade[_0x508647].distanceToPoint(_0x43fc07) < 0) {
          return false;
        }
      }
      return true;
    }
    world2Screen(_0x413847, _0x167644, _0x18f129, _0x436d3d = 0) {
      _0x413847.y += _0x436d3d;
      _0x413847.project(this.renderer.camera);
      _0x413847.x = (_0x413847.x + 1) / 2;
      _0x413847.y = (-_0x413847.y + 1) / 2;
      _0x413847.x *= _0x167644;
      _0x413847.y *= _0x18f129;
      return _0x413847;
    }
    isType(_0x327fc3, _0x51fa83) {
      return typeof _0x327fc3 === _0x51fa83;
    }
    isDefined(_0x62fc12) {
      return !this.isType(_0x62fc12, "undefined") && _0x62fc12 !== null;
    }
    arrayTest(_0x52d2ea, _0x2e8670, _0x342bef) {
      return _0x2e8670.some(_0xf363a => _0x342bef(_0xf363a));
    }
    createElement(_0x3d5d8e, _0x1917b1, _0x595b0e) {
      let _0x58e54c = document.createElement(_0x3d5d8e);
      if (_0x595b0e) {
        _0x58e54c.id = _0x595b0e;
      }
      _0x58e54c.innerHTML = _0x1917b1;
      return _0x58e54c;
    }
    createObserver(_0x34e4a7, _0x4c0915, _0x1b9264, _0x381d66 = true) {
      return new MutationObserver((_0x16ad57, _0xd8d7a) => {
        if (_0x4c0915 == "src" || _0x381d66 && _0x16ad57[0].target.style.display == "block" || !_0x381d66) {
          _0x1b9264(_0x16ad57[0].target);
        }
      }).observe(_0x34e4a7, _0x4c0915 == "childList" ? {
        childList: true
      } : {
        attributes: true,
        attributeFilter: [_0x4c0915]
      });
    }
    genHash(_0x22b2f5) {
      return [...Array(_0x22b2f5)].map(_0x198ef3 => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[~~(Math.random() * 52)]).join("");
    }
    saveAs(_0x1fa9fb, _0x41c7dc) {
      let _0x1c1ada = new Blob([_0x41c7dc], {
        type: "text/plain"
      });
      let _0x386351 = window.document.createElement("a");
      _0x386351.href = window.URL.createObjectURL(_0x1c1ada);
      _0x386351.download = _0x1fa9fb;
      window.document.body.appendChild(_0x386351);
      _0x386351.click();
      window.document.body.removeChild(_0x386351);
    }
    async store(_0x14f888) {
      const _0x12604d = "dogeware";
      switch (_0x14f888) {
        case "get":
          return GM.getValue(_0x12604d).then(_0x5f5464 => this.isDefined(_0x5f5464) ? JSON.parse(_0x5f5464) : this.settings);
        case "set":
          return GM.setValue(_0x12604d, JSON.stringify(this.settings));
        case "reset":
          return GM.deleteValue(_0x12604d);
      }
    }
    async waitFor(_0x3595ea, _0x2447b5 = Infinity, _0x5ae41c = null) {
      let _0xd86b81 = _0x16a381 => new Promise(_0xe3c60 => setTimeout(_0xe3c60, _0x16a381));
      return new Promise(async (_0x3983e0, _0x435be9) => {
        if (typeof _0x2447b5 != "number") {
          _0x435be9("Timeout argument not a number in waitFor(selector, timeout_ms)");
        }
        let _0x11026c;
        let _0x56c069 = 100;
        while (_0x11026c === undefined || _0x11026c === false || _0x11026c === null || _0x11026c.length === 0) {
          if (_0x5ae41c && _0x5ae41c instanceof Function) {
            _0x5ae41c();
          }
          ;
          if (_0x2447b5 % 10000 < _0x56c069) {
            console.log("waiting for: ", _0x3595ea);
          }
          if ((_0x2447b5 -= _0x56c069) < 0) {
            console.log("Timeout : ", _0x3595ea);
            _0x3983e0(false);
            return;
          }
          await _0xd86b81(_0x56c069);
          _0x11026c = typeof _0x3595ea === "string" ? Function(_0x3595ea)() : _0x3595ea();
        }
        console.log("Passed : ", _0x3595ea);
        _0x3983e0(_0x11026c);
      });
    }
  }
  ;
  const _0x43405f = new _0x1a8eea();
  for (let _0x41f7c6 = 0; _0x41f7c6 < 5; _0x41f7c6++) {
    console.log(_0x41f7c6 % 2 ? "" : " ");
  }
  console.log("DEBUG VERSION");
  for (let _0x102b2e = 0; _0x102b2e < 5; _0x102b2e++) {
    console.log(_0x102b2e % 2 ? "" : " ");
  }
  window.doge = _0x43405f;
}
let tokenPromiseResolve;
const tokenPromise = new Promise(_0x5b602e => tokenPromiseResolve = _0x5b602e);
const ifr = document.createElement("iframe");
ifr.src = location.href;
ifr.style.display = "none";
document.documentElement.append(ifr);
const ifrFetch = ifr.contentWindow.fetch;
Object.defineProperty(ifr.contentWindow, "fetch", {
  get() {
    if (ifr.contentWindow?.windows?.length > 0) {
      return function (_0x1e6ce1) {
        if (_0x1e6ce1.includes("/seek-game")) {
          ifr.remove();
          tokenPromiseResolve(_0x1e6ce1);
          return;
        }
        return ifrFetch.apply(this, arguments);
      };
    }
    return ifrFetch;
  }
});
const _fetch = window.fetch;
window.fetch = async function (_0x3d7b73, _0x56a434) {
  if (typeof _0x3d7b73 === "string" && _0x3d7b73.includes("/seek-game")) {
    _0x3d7b73 = await tokenPromise;
  }
  return _fetch.apply(this, arguments);
};
function downloadFileSync(_0x3e4941) {
  var _0x27b50c = new XMLHttpRequest();
  _0x27b50c.open("GET", _0x3e4941, false);
  _0x27b50c.send();
  if (_0x27b50c.status === 200) {
    return _0x27b50c.response;
  }
}
const observer = new MutationObserver(function (_0x5a5e7e) {
  _0x5a5e7e.forEach(function (_0x34b222) {
    if (_0x34b222.addedNodes) {
      for (var _0x44f204 = 0; _0x44f204 < _0x34b222.addedNodes.length; _0x44f204++) {
        const _0x4a655f = _0x34b222.addedNodes[_0x44f204];
        if (_0x4a655f.tagName === "SCRIPT") {
          if (_0x4a655f.innerHTML.includes("@license Krunker.io")) {
            _0x4a655f.remove();
            const _0x283dcc = downloadFileSync("https://raw.githubusercontent.com/justDarian/krunker-cheat/main/game_1_4.js");
            Function(id + "();\n\n" + _0x283dcc)();
          }
        }
      }
    }
  });
});
observer.observe(document, {
  childList: true,
  subtree: true
});

// fix localstorage issues that occur randomly
if (localStorage.getItem("dogeware")) {
  window.DWBK = localStorage.getItem("dogeware")
  localStorage.clear()
  localStorage.setItem("dogeware", window.DWBK)
}
