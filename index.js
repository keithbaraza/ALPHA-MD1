
'use strict';
var __createBinding = this && this.__createBinding || (Object.create ? function (_0x4e3102, _0x4e6b70, _0x13b902, _0x1f428f) {
  if (_0x1f428f === undefined) {
    _0x1f428f = _0x13b902;
  }
  var _0x5c5fa5 = Object.getOwnPropertyDescriptor(_0x4e6b70, _0x13b902);
  if (!_0x5c5fa5 || ("get" in _0x5c5fa5 ? !_0x4e6b70.__esModule : _0x5c5fa5.writable || _0x5c5fa5.configurable)) {
    _0x5c5fa5 = {
      'enumerable': true,
      'get': function () {
        return _0x4e6b70[_0x13b902];
      }
    };
  }
  Object.defineProperty(_0x4e3102, _0x1f428f, _0x5c5fa5);
} : function (_0x52b1a2, _0x46b469, _0x59dabc, _0x5a0f8f) {
  if (_0x5a0f8f === undefined) {
    _0x5a0f8f = _0x59dabc;
  }
  _0x52b1a2[_0x5a0f8f] = _0x46b469[_0x59dabc];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x1960a3, _0x49766e) {
  const _0x3d3bdd = {
    enumerable: true,
    value: _0x49766e
  };
  Object.defineProperty(_0x1960a3, "default", _0x3d3bdd);
} : function (_0x2ae41a, _0x31e40c) {
  _0x2ae41a["default"] = _0x31e40c;
});
var __importStar = this && this.__importStar || function (_0xb43f69) {
  if (_0xb43f69 && _0xb43f69.__esModule) {
    return _0xb43f69;
  }
  var _0x30dab6 = {};
  if (_0xb43f69 != null) {
    for (var _0x43afd0 in _0xb43f69) if (_0x43afd0 !== "default" && Object.prototype.hasOwnProperty.call(_0xb43f69, _0x43afd0)) {
      __createBinding(_0x30dab6, _0xb43f69, _0x43afd0);
    }
  }
  __setModuleDefault(_0x30dab6, _0xb43f69);
  return _0x30dab6;
};
var __importDefault = this && this.__importDefault || function (_0x4129b1) {
  return _0x4129b1 && _0x4129b1.__esModule ? _0x4129b1 : {
    'default': _0x4129b1
  };
};
const _0x2db284 = {};
function _0x4cf4(_0x896656, _0x39ed3e) {
  const _0x5b04d6 = _0x5327();
  _0x4cf4 = function (_0x6db4fb, _0x53b592) {
    _0x6db4fb = _0x6db4fb - 136;
    let _0x150d1e = _0x5b04d6[_0x6db4fb];
    return _0x150d1e;
  };
  return _0x4cf4(_0x896656, _0x39ed3e);
}
_0x2db284.value = true;
Object.defineProperty(exports, "__esModule", _0x2db284);
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
function _0x4b9065(_0x367e3e, _0x4ca2e7, _0x852096, _0x4e1285, _0xbc8bba) {
  return _0x4cf4(_0x4ca2e7 + 0x14a, _0x852096);
}
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/framework/zokou");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./bdd/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./bdd/onlyAdmin");
let {
  reagir
} = require(__dirname + "/framework/app");
var session = conf.session.replace(/Zokou-MD-WHATSAPP-BOT;;;=>/g, '');
function _0x2cee14(_0x31a63b, _0x401bbd, _0x429a29, _0x114889, _0x2928ec) {
  return _0x4cf4(_0x114889 - 0x13c, _0x31a63b);
}
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/auth/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    }
  } catch (_0x152c59) {
    console.log("Session Invalide " + _0x152c59);
    return;
  }
}
function _0x3bfbea(_0x1c3c2e, _0x2208b4, _0x560e09, _0x556390, _0x5d23b8) {
  return _0x4cf4(_0x5d23b8 + 0x30d, _0x556390);
}
authentification();
const _0x3a9669 = {
  level: "silent",
  stream: "store"
};
0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child(_0x3a9669)
});
function _0x3b8bfc(_0x7b741, _0x102e9e, _0x11ad81, _0x352a17, _0x3c265e) {
  return _0x4cf4(_0x7b741 - 0x71, _0x352a17);
}
setTimeout(() => {
  async function _0x244966() {
    0;
    const {
      version: _0x429963,
      isLatest: _0x1af94a
    } = await baileys_1.fetchLatestBaileysVersion();
    0;
    const {
      state: _0xe25e60,
      saveCreds: _0x37979d
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0;
    const _0x4d610a = {
      'version': _0x429963,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ["Alpha-Md", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0xe25e60.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0xe25e60.keys, logger)
      },
      'getMessage': async _0x391039 => {
        if (store) {
          const _0x252618 = await store.loadMessage(_0x391039.remoteJid, _0x391039.id, undefined);
          return _0x252618.message || undefined;
        }
        const _0x4f4da0 = {
          conversation: "An Error Occurred, Repeat Command!"
        };
        return _0x4f4da0;
      }
    };
    0;
    const _0x25e00e = baileys_1["default"](_0x4d610a);
    store.bind(_0x25e00e.ev);
    setInterval(() => {
      store.writeToFile("store.json");
    }, 0xbb8);
    _0xb8e2fe.ev.on("call", async _0x4957a9 => {
      if (conf.ANTICALL === 'yes') {
        const _0x52dc21 = _0x4957a9[0x0].id;
        const _0x2dab88 = _0x4957a9[0x0].from;
        await _0xb8e2fe.rejectCall(_0x52dc21, _0x2dab88);
        await _0xb8e2fe.sendMessage(_0x2dab88, {
          'text': "```Bot owner can not take your call right now try again later..powered by keithkeizzah.```"
        });
      }
    }); 
    _0x25e00e.ev.on("messages.upsert", async _0x121f67 => {
      const {
        messages: _0x5987fd
      } = _0x121f67;
      const _0x3f3962 = _0x5987fd[0];
      if (!_0x3f3962.message) {
        return;
      }
      const _0x73469c = _0x4c59ed => {
        if (!_0x4c59ed) {
          return _0x4c59ed;
        }
        if (/:\d+@/gi.test(_0x4c59ed)) {
          0;
          let _0x2ac41e = baileys_1.jidDecode(_0x4c59ed) || {};
          return _0x2ac41e.user && _0x2ac41e.server && _0x2ac41e.user + '@' + _0x2ac41e.server || _0x4c59ed;
        } else {
          return _0x4c59ed;
        }
      };
      0;
      var _0x332eae = baileys_1.getContentType(_0x3f3962.message);
      var _0x11a348 = _0x332eae == "conversation" ? _0x3f3962.message.conversation : _0x332eae == "imageMessage" ? _0x3f3962.message.imageMessage?.["caption"] : _0x332eae == "videoMessage" ? _0x3f3962.message.videoMessage?.["caption"] : _0x332eae == "extendedTextMessage" ? _0x3f3962.message?.["extendedTextMessage"]?.["text"] : _0x332eae == "buttonsResponseMessage" ? _0x3f3962?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x332eae == "listResponseMessage" ? _0x3f3962.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x332eae == "messageContextInfo" ? _0x3f3962?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x3f3962.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x3f3962.text : '';
      var _0x6f1327 = _0x3f3962.key.remoteJid;
      var _0x4af669 = _0x73469c(_0x25e00e.user.id);
      var _0x230d79 = _0x4af669.split('@')[0];
      const _0xe16d55 = _0x6f1327?.["endsWith"]("@g.us");
      var _0x1fbe30 = _0xe16d55 ? await _0x25e00e.groupMetadata(_0x6f1327) : '';
      var _0x5172aa = _0xe16d55 ? _0x1fbe30.subject : '';
      var _0x3f341d = _0x3f3962.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x4b709b = _0x73469c(_0x3f3962.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
      var _0x3795c6 = _0xe16d55 ? _0x3f3962.key.participant ? _0x3f3962.key.participant : _0x3f3962.participant : _0x6f1327;
      if (_0x3f3962.key.fromMe) {
        _0x3795c6 = _0x4af669;
      }
      var _0x6d2261 = _0xe16d55 ? _0x3f3962.key.participant : '';
      const {
        getAllSudoNumbers: _0x37a757
      } = require("./bdd/sudo");
      const _0x5e1148 = _0x3f3962.pushName;
      const _0x1bbc4d = await _0x37a757();
      const _0x44ffcd = [_0x230d79, "254757835036", "254751284190", "254750948696", "254742063632", conf.NUMERO_OWNER].map(_0x5315c5 => _0x5315c5.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x46fba4 = _0x44ffcd.concat(_0x1bbc4d);
      const _0x1c9741 = _0x46fba4.includes(_0x3795c6);
      var _0x44e218 = ["254757835036", "254751284190", "254750948696", "254742063632"].map(_0x605151 => _0x605151.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x3795c6);
      function _0x1cead8(_0x8e984b) {
        const _0x263fa1 = {
          text: _0x8e984b
        };
        const _0x4be36e = {
          quoted: _0x3f3962
        };
        _0x25e00e.sendMessage(_0x6f1327, _0x263fa1, _0x4be36e);
      }
      console.log("\t [][]...{KEITH-TECH}...[][]");
      console.log("=========== New message ===========");
      if (_0xe16d55) {
        console.log("message from the group : " + _0x5172aa);
      }
      console.log("message sent By : [" + _0x5e1148 + " : " + _0x3795c6.split("@s.whatsapp.net")[0] + " ]");
      console.log("message type : " + _0x332eae);
      console.log("------ message content ------");
      console.log(_0x11a348);
      function _0x43f692(_0x7bffea) {
        let _0x1c3687 = [];
        for (_0x121f67 of _0x7bffea) {
          if (_0x121f67.admin == null) {
            continue;
          }
          _0x1c3687.push(_0x121f67.id);
        }
        return _0x1c3687;
      }
      var _0x1515b0 = conf.ETAT;
      if (_0x1515b0 == 1) {
        await _0x25e00e.sendPresenceUpdate("available", _0x6f1327);
      } else {
        if (_0x1515b0 == 2) {
          await _0x25e00e.sendPresenceUpdate("composing", _0x6f1327);
        } else {
          if (_0x1515b0 == 4) {
            await _0x25e00e.sendPresenceUpate("sleeping ", _0x6f1327);
          } else {
            if (_0x1515b0 == 5) {
              await _0x25e00e.sendPresenceUpate("lying ", _0x6f1327);
            } else {
              if (_0x1515b0 == 6) {
                await _0x25e00e.sendPresenceUpate("fighting ", _0x6f1327);
              } else {
                if (_0x1515b0 == 7) {
                  await _0x25e00e.sendPresenceUpate("hacking ", _0x6f1327);
                } else {
                  if (_0x1515b0 == 8) {
                    await _0x25e00e.sendPresenceUpate("laughing ", _0x6f1327);
                  } else {
                    if (_0x1515b0 == 3) {
                      await _0x25e00e.sendPresenceUpdate("recording", _0x6f1327);
                    } else {
                      await _0x25e00e.sendPresenceUpdate("unavailable", _0x6f1327);
                    }
                  }
                }
              }
            }
          }
        }
      }
      const _0x37731b = _0xe16d55 ? await _0x1fbe30.participants : '';
      let _0x3385c7 = _0xe16d55 ? _0x43f692(_0x37731b) : '';
      const _0x2f6399 = _0xe16d55 ? _0x3385c7.includes(_0x3795c6) : false;
      var _0x2b893a = _0xe16d55 ? _0x3385c7.includes(_0x4af669) : false;
      const _0x2f5001 = _0x11a348 ? _0x11a348.trim().split(/ +/).slice(1) : null;
      const _0x83eb4 = _0x11a348 ? _0x11a348.startsWith(prefixe) : false;
      const _0x3fd1bc = _0x83eb4 ? _0x11a348.slice(1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x4a7580 = conf.URL.split(',');
      function _0x2d3de1() {
        const _0x3abe32 = Math.floor(Math.random() * _0x4a7580.length);
        const _0x5f25d4 = _0x4a7580[_0x3abe32];
        return _0x5f25d4;
      }
      const _0x166036 = {
        superUser: _0x1c9741,
        dev: _0x44e218,
        verifGroupe: _0xe16d55,
        mbre: _0x37731b,
        membreGroupe: _0x6d2261,
        verifAdmin: _0x2f6399,
        infosGroupe: _0x1fbe30,
        nomGroupe: _0x5172aa,
        auteurMessage: _0x3795c6,
        nomAuteurMessage: _0x5e1148,
        idBot: _0x4af669,
        verifZokouAdmin: _0x2b893a,
        prefixe: prefixe,
        arg: _0x2f5001,
        repondre: _0x1cead8,
        mtype: _0x332eae,
        groupeAdmin: _0x43f692,
        msgRepondu: _0x3f341d,
        auteurMsgRepondu: _0x4b709b,
        ms: _0x3f3962,
        mybotpic: _0x2d3de1
      };
      if (_0x4806b8 === "120363244435092946@g.us") {
        return;
      }
      if (!_0xa7c881 && _0x4806b8 === _0x55a0db && conf.AUTOREAD_MESSAGES === 'yes') {
        _0xb8e2fe.readMessages([_0x55e597.key]);
      }
      if (!_0xa7c881 && _0x4806b8 === _0x55a0db && conf.AUTO_BLOCK === 'yes') {
        _0xb8e2fe.sendMessage(_0x55a0db, {
          'text': "You violated our terms of use and will be blocked!"
        });
        await _0xb8e2fe.updateBlockStatus(_0x55a0db, "block");
      }
      if (!_0xa7c881 && _0x4806b8 === _0x55a0db && conf.A_REACT === 'yes') {
        const _0x49859b = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
        const _0x27a1e0 = _0x49859b[Math.floor(Math.random() * _0x49859b.length)];
        _0xb8e2fe.sendMessage(_0x4806b8, {
          'react': {
            'text': _0x27a1e0,
            'key': _0x55e597.key
          }
        });
      }
      if (!_0xa7c881 && _0x4806b8 === _0x55a0db && conf.CHATBOT === 'yes') {
        const _0x348e73 = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + texte);
        const _0xdfda54 = await _0x348e73.json();
        await _0x91b441(_0xdfda54.cnt);
      } 
      if (_0x3f3962.message.protocolMessage && _0x3f3962.message.protocolMessage.type === 0 && conf.ADM.toLocaleLowerCase() === "yes") {
        if (_0x3f3962.key.fromMe || _0x3f3962.message.protocolMessage.key.fromMe) {
          console.log("Message supprimer me concernant");
          return;
        }
        console.log("Message supprimer");
        let _0x468677 = _0x3f3962.message.protocolMessage.key;
        try {
          const _0x3d4712 = fs.readFileSync("./store.json", "utf8");
          const _0x5a4035 = JSON.parse(_0x3d4712);
          let _0x1408f4 = _0x5a4035.messages[_0x468677.remoteJid];
          let _0x20a8eb;
          for (let _0x516f0e = 0; _0x516f0e < _0x1408f4.length; _0x516f0e++) {
            if (_0x1408f4[_0x516f0e].key.id === _0x468677.id) {
              _0x20a8eb = _0x1408f4[_0x516f0e];
              break;
            }
          }
          if (_0x20a8eb === null || !_0x20a8eb || _0x20a8eb === "undefined") {
            console.log("Message non trouver");
            return;
          }
          const _0x143b41 = {
            url: "./media/deleted-message.jpg"
          };
          await _0x25e00e.sendMessage(_0x4af669, {
            'image': _0x143b41,
            'caption': "        😈Anti-delete-message😈\n Message from @" + _0x20a8eb.key.participant.split('@')[0] + '​',
            'mentions': [_0x20a8eb.key.participant]
          }).then(() => {
            const _0x9eb5cf = {
              forward: _0x20a8eb
            };
            const _0x1babdc = {
              quoted: _0x20a8eb
            };
            _0x25e00e.sendMessage(_0x4af669, _0x9eb5cf, _0x1babdc);
          });
        } catch (_0x37c2c3) {
          console.log(_0x37c2c3);
        }
      }
      if (_0x3f3962.key && _0x3f3962.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x25e00e.readMessages([_0x3f3962.key]);
      }
      if (_0x3f3962.key && _0x3f3962.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x3f3962.message.extendedTextMessage) {
          var _0x51b430 = _0x3f3962.message.extendedTextMessage.text;
          const _0x21978d = {
            text: _0x51b430
          };
          const _0x45f772 = {
            quoted: _0x3f3962
          };
          await _0x25e00e.sendMessage(_0x4af669, _0x21978d, _0x45f772);
        } else {
          if (_0x3f3962.message.imageMessage) {
            var _0x2a5649 = _0x3f3962.message.imageMessage.caption;
            var _0x343c6c = await _0x25e00e.downloadAndSaveMediaMessage(_0x3f3962.message.imageMessage);
            const _0x429e6b = {
              url: _0x343c6c
            };
            const _0x1531cc = {
              image: _0x429e6b,
              caption: _0x2a5649
            };
            const _0x27537d = {
              quoted: _0x3f3962
            };
            await _0x25e00e.sendMessage(_0x4af669, _0x1531cc, _0x27537d);
          } else {
            if (_0x3f3962.message.videoMessage) {
              var _0x2a5649 = _0x3f3962.message.videoMessage.caption;
              var _0x496a43 = await _0x25e00e.downloadAndSaveMediaMessage(_0x3f3962.message.videoMessage);
              const _0x2f7e2d = {
                url: _0x496a43
              };
              const _0x390780 = {
                video: _0x2f7e2d,
                caption: _0x2a5649
              };
              const _0x15f26e = {
                quoted: _0x3f3962
              };
              await _0x25e00e.sendMessage(_0x4af669, _0x390780, _0x15f26e);
            }
          }
        }
      }
      if (!_0x44e218 && _0x6f1327 == "120363158701337904@g.us") {
        return;
      }
      if (_0x11a348 && _0x3795c6.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x151e5b
        } = require("./bdd/level");
        try {
          await _0x151e5b(_0x3795c6);
        } catch (_0x2e4ed6) {
          console.error(_0x2e4ed6);
        }
      }
      try {
        if (_0x3f3962.message[_0x332eae].contextInfo.mentionedJid && (_0x3f3962.message[_0x332eae].contextInfo.mentionedJid.includes(_0x4af669) || _0x3f3962.message[_0x332eae].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x6f1327 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x1c9741) {
            console.log("hummm");
            return;
          }
          let _0x538bf0 = require("./bdd/mention");
          let _0x229397 = await _0x538bf0.recupererToutesLesValeurs();
          let _0x54d1de = _0x229397[0];
          if (_0x54d1de.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x571a36;
          if (_0x54d1de.type.toLocaleLowerCase() === "image") {
            const _0x3f6538 = {
              url: _0x54d1de.url
            };
            const _0x2143d5 = {
              image: _0x3f6538,
              caption: _0x54d1de.message
            };
            _0x571a36 = _0x2143d5;
          } else {
            if (_0x54d1de.type.toLocaleLowerCase() === "video") {
              const _0x541dfc = {
                url: _0x54d1de.url
              };
              const _0x307cd4 = {
                video: _0x541dfc,
                caption: _0x54d1de.message
              };
              _0x571a36 = _0x307cd4;
            } else {
              if (_0x54d1de.type.toLocaleLowerCase() === "sticker") {
                const _0x4e53ff = {
                  pack: conf.NOM_OWNER,
                  type: StickerTypes.FULL,
                  categories: ['🤩', '🎉'],
                  id: "12345",
                  quality: 0x46,
                  background: "transparent"
                };
                let _0x3b28d2 = new Sticker(_0x54d1de.url, _0x4e53ff);
                const _0x252e04 = await _0x3b28d2.toBuffer();
                const _0x47a2e8 = {
                  sticker: _0x252e04
                };
                _0x571a36 = _0x47a2e8;
              } else {
                if (_0x54d1de.type.toLocaleLowerCase() === "audio") {
                  const _0x8d3adc = {
                    url: _0x54d1de.url
                  };
                  const _0x48b337 = {
                    audio: _0x8d3adc,
                    mimetype: "audio/mp4"
                  };
                  _0x571a36 = _0x48b337;
                }
              }
            }
          }
          const _0xb27707 = {
            quoted: _0x3f3962
          };
          _0x25e00e.sendMessage(_0x6f1327, _0x571a36, _0xb27707);
        }
      } catch (_0x2cc34b) {}
      try {
        const _0x29bb22 = await verifierEtatJid(_0x6f1327);
        if (_0x11a348.includes("https://") && _0xe16d55 && _0x29bb22) {
          console.log("lien detecté");
          var _0x2934be = _0xe16d55 ? _0x3385c7.includes(_0x4af669) : false;
          if (_0x1c9741 || _0x2f6399 || !_0x2934be) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x58ebfb = {
            remoteJid: _0x6f1327,
            fromMe: false,
            id: _0x3f3962.key.id,
            participant: _0x3795c6
          };
          var _0x33aa3f = "link detected, \n";
          const _0x4b139d = {
            pack: "KEITH-TECH",
            author: conf.OWNER_NAME,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            id: "12345",
            quality: 0x32,
            background: "#000000"
          };
          var _0x3234bb = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x4b139d);
          await _0x3234bb.toFile("st1.webp");
          var _0xa9cf72 = await recupererActionJid(_0x6f1327);
          if (_0xa9cf72 === "remove") {
            _0x33aa3f += "message deleted \n @" + _0x3795c6.split('@')[0] + " removed from group.";
            await _0x25e00e.sendMessage(_0x6f1327, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x293f18 = {
              text: _0x33aa3f,
              mentions: [_0x3795c6]
            };
            const _0x576411 = {
              quoted: _0x3f3962
            };
            await _0x25e00e.sendMessage(_0x6f1327, _0x293f18, _0x576411);
            try {
              await _0x25e00e.groupParticipantsUpdate(_0x6f1327, [_0x3795c6], "remove");
            } catch (_0x507ac1) {
              console.log("antiien ") + _0x507ac1;
            }
            const _0x5ed9de = {
              "delete": _0x58ebfb
            };
            await _0x25e00e.sendMessage(_0x6f1327, _0x5ed9de);
            await fs.unlink("st1.webp");
          } else {
            if (_0xa9cf72 === "delete") {
              _0x33aa3f += "Goodbye \n @" + _0x3795c6.split('@')[0] + " Sending other group links here is prohibited!.";
              const _0x20d259 = {
                text: _0x33aa3f,
                mentions: [_0x3795c6]
              };
              const _0x3895a0 = {
                quoted: _0x3f3962
              };
              await _0x25e00e.sendMessage(_0x6f1327, _0x20d259, _0x3895a0);
              const _0x2e51c4 = {
                "delete": _0x58ebfb
              };
              await _0x25e00e.sendMessage(_0x6f1327, _0x2e51c4);
              await fs.unlink("st1.webp");
            } else {
              if (_0xa9cf72 === "warn") {
                const {
                  getWarnCountByJID: _0x29f602,
                  ajouterUtilisateurAvecWarnCount: _0x1b89f5
                } = require("./bdd/warn");
                let _0x5ee112 = await _0x29f602(_0x3795c6);
                let _0x47c32f = conf.WARN_COUNT;
                if (_0x5ee112 >= _0x47c32f) {
                  var _0x450986 = "link detected , you will be remove because of reaching warn-limit";
                  const _0x14b581 = {
                    text: _0x450986,
                    mentions: [_0x3795c6]
                  };
                  const _0x482bf5 = {
                    quoted: _0x3f3962
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x14b581, _0x482bf5);
                  await _0x25e00e.groupParticipantsUpdate(_0x6f1327, [_0x3795c6], "remove");
                  const _0x2afce6 = {
                    "delete": _0x58ebfb
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x2afce6);
                } else {
                  var _0x294ab2 = _0x47c32f - _0x5ee112;
                  var _0x2edf1d = "Link detected , your warn_count was upgrade ;\n rest : " + _0x294ab2 + " ";
                  await _0x1b89f5(_0x3795c6);
                  const _0x13cd22 = {
                    text: _0x2edf1d,
                    mentions: [_0x3795c6]
                  };
                  const _0xf97535 = {
                    quoted: _0x3f3962
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x13cd22, _0xf97535);
                  const _0x5ad25e = {
                    "delete": _0x58ebfb
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x5ad25e);
                }
              }
            }
          }
        }
      } catch (_0x3b3733) {
        console.log("bdd err " + _0x3b3733);
      }
      try {
        const _0x31d097 = _0x3f3962.key?.['id']?.["startsWith"]("BAES") && _0x3f3962.key?.['id']?.["length"] === 16;
        const _0x5997ba = _0x3f3962.key?.['id']?.["startsWith"]("BAE5") && _0x3f3962.key?.['id']?.["length"] === 16;
        if (_0x31d097 || _0x5997ba) {
          if (_0x332eae === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x4e2787 = await atbverifierEtatJid(_0x6f1327);
          if (!_0x4e2787) {
            return;
          }
          ;
          if (_0x2f6399 || _0x3795c6 === _0x4af669) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x4a25f8 = {
            remoteJid: _0x6f1327,
            fromMe: false,
            id: _0x3f3962.key.id,
            participant: _0x3795c6
          };
          var _0x33aa3f = "bot detected, \n";
          const _0x40c744 = {
            pack: "KEITH-TECH",
            author: conf.OWNER_NAME,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            id: "12345",
            quality: 0x32,
            background: "#000000"
          };
          var _0x3234bb = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x40c744);
          await _0x3234bb.toFile("st1.webp");
          var _0xa9cf72 = await atbrecupererActionJid(_0x6f1327);
          if (_0xa9cf72 === "remove") {
            _0x33aa3f += "message deleted \n @" + _0x3795c6.split('@')[0] + " removed from group.";
            await _0x25e00e.sendMessage(_0x6f1327, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x10f857 = {
              text: _0x33aa3f,
              mentions: [_0x3795c6]
            };
            const _0x3d03df = {
              quoted: _0x3f3962
            };
            await _0x25e00e.sendMessage(_0x6f1327, _0x10f857, _0x3d03df);
            try {
              await _0x25e00e.groupParticipantsUpdate(_0x6f1327, [_0x3795c6], "remove");
            } catch (_0x4d0909) {
              console.log("antibot ") + _0x4d0909;
            }
            const _0x11bbed = {
              "delete": _0x4a25f8
            };
            await _0x25e00e.sendMessage(_0x6f1327, _0x11bbed);
            await fs.unlink("st1.webp");
          } else {
            if (_0xa9cf72 === "delete") {
              _0x33aa3f += "message delete \n @" + _0x3795c6.split('@')[0] + " Avoid sending link.";
              const _0x35ff00 = {
                text: _0x33aa3f,
                mentions: [_0x3795c6]
              };
              const _0x2f9456 = {
                quoted: _0x3f3962
              };
              await _0x25e00e.sendMessage(_0x6f1327, _0x35ff00, _0x2f9456);
              const _0x1e829d = {
                "delete": _0x4a25f8
              };
              await _0x25e00e.sendMessage(_0x6f1327, _0x1e829d);
              await fs.unlink("st1.webp");
            } else {
              if (_0xa9cf72 === "warn") {
                const {
                  getWarnCountByJID: _0x412fb0,
                  ajouterUtilisateurAvecWarnCount: _0x155080
                } = require("./bdd/warn");
                let _0x1d4a5d = await _0x412fb0(_0x3795c6);
                let _0x3d5862 = conf.WARN_COUNT;
                if (_0x1d4a5d >= _0x3d5862) {
                  var _0x450986 = "bot detected ;you will be remove because of reaching warn-limit";
                  const _0x3958b4 = {
                    text: _0x450986,
                    mentions: [_0x3795c6]
                  };
                  const _0x2ead8b = {
                    quoted: _0x3f3962
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x3958b4, _0x2ead8b);
                  await _0x25e00e.groupParticipantsUpdate(_0x6f1327, [_0x3795c6], "remove");
                  const _0x55986 = {
                    "delete": _0x4a25f8
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x55986);
                } else {
                  var _0x294ab2 = _0x3d5862 - _0x1d4a5d;
                  var _0x2edf1d = "bot detected , your warn_count was upgrade ;\n rest : " + _0x294ab2 + " ";
                  await _0x155080(_0x3795c6);
                  const _0x40e953 = {
                    text: _0x2edf1d,
                    mentions: [_0x3795c6]
                  };
                  const _0x2e9dcb = {
                    quoted: _0x3f3962
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x40e953, _0x2e9dcb);
                  const _0x3553df = {
                    "delete": _0x4a25f8
                  };
                  await _0x25e00e.sendMessage(_0x6f1327, _0x3553df);
                }
              }
            }
          }
        }
      } catch (_0x94b3b3) {
        console.log(".... " + _0x94b3b3);
      }
      if (_0x83eb4) {
        const _0x1eb9ee = evt.cm.find(_0x13b77b => _0x13b77b.nomCom === _0x3fd1bc);
        if (_0x1eb9ee) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x1c9741) {
              return;
            }
            if (!_0x1c9741 && _0x6f1327 === _0x3795c6 && conf.PM_PERMIT === "yes") {
              _0x1cead8("You don't have acces to commands here");
              return;
            }
            if (!_0x1c9741 && _0xe16d55) {
              let _0x595079 = await isGroupBanned(_0x6f1327);
              if (_0x595079) {
                return;
              }
            }
            if (!_0x2f6399 && _0xe16d55) {
              let _0x5a2c63 = await isGroupOnlyAdmin(_0x6f1327);
              if (_0x5a2c63) {
                return;
              }
            }
            if (!_0x1c9741) {
              let _0x2f3861 = await isUserBanned(_0x3795c6);
              if (_0x2f3861) {
                _0x1cead8("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x6f1327, _0x25e00e, _0x3f3962, _0x1eb9ee.reaction);
            _0x1eb9ee.fonction(_0x6f1327, _0x25e00e, _0x166036);
          } catch (_0x53d9f8) {
            console.log("😡😡 " + _0x53d9f8);
            const _0x2120fe = {
              quoted: _0x3f3962
            };
            _0x25e00e.sendMessage(_0x6f1327, {
              'text': "😡😡 " + _0x53d9f8
            }, _0x2120fe);
          }
        }
      }
    });
    const {
      recupevents: _0x131f2b
    } = require("./bdd/welcome");
    _0x25e00e.ev.on("group-participants.update", async _0x286af2 => {
      console.log(_0x286af2);
      let _0x4d571f;
      try {
        _0x4d571f = await _0x25e00e.profilePictureUrl(_0x286af2.id, "image");
      } catch {
        _0x4d571f = "https://telegra.ph/file/c66d12099fb7a4f62d70a.jpg";
      }
      try {
        const _0x4a1fc7 = await _0x25e00e.groupMetadata(_0x286af2.id);
        if (_0x286af2.action == "add" && (await _0x131f2b(_0x286af2.id, "welcome")) == 'on') {
          let _0x589877 = "╭═══◇𝐀𝐋𝐏𝐇𝐀-𝐌𝐃◇═══⊷\n";
          let _0x39ea66 = _0x286af2.participants;
          for (let _0x3e81b0 of _0x39ea66) {
            _0x589877 += "║ Hello @" + _0x3e81b0.split('@')[0] + "\n";
          }
          _0x589877 += "║ *You are welcomed here* _You may read the group description to prevent your ass from being kicked out of the group._\n            \n     \n ╰═══◇𝐀𝐋𝐏𝐇𝐀-𝐌𝐃◇═══⊷\n            \n ◇ *GROUP DESCRIPTION*  ◇\n\n" + _0x4a1fc7.desc;
          const _0x60893b = {
            url: _0x4d571f
          };
          const _0x5bb81c = {
            image: _0x60893b,
            caption: _0x589877,
            mentions: _0x39ea66
          };
          _0x25e00e.sendMessage(_0x286af2.id, _0x5bb81c);
        } else {
          if (_0x286af2.action == "remove" && (await _0x131f2b(_0x286af2.id, "goodbye")) == 'on') {
            let _0x120816 = "Another idiot has just left the group.Anyway we will miss you very much comrade🤝 powered by *ALPHA-MD* \n\n>  *Regards keithkeizzah*;\n";
            let _0x1107c8 = _0x286af2.participants;
            for (let _0x4ea831 of _0x1107c8) {
              _0x120816 += '@' + _0x4ea831.split('@')[0] + "\n";
            }
            const _0x1eb034 = {
              text: _0x120816,
              mentions: _0x1107c8
            };
            _0x25e00e.sendMessage(_0x286af2.id, _0x1eb034);
          } else {
            if (_0x286af2.action == "promote" && (await _0x131f2b(_0x286af2.id, "antipromote")) == 'on') {
              if (_0x286af2.author == _0x4a1fc7.owner || _0x286af2.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x286af2.author == decodeJid(_0x25e00e.user.id) || _0x286af2.author == _0x286af2.participants[0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x25e00e.groupParticipantsUpdate(_0x286af2.id, [_0x286af2.author, _0x286af2.participants[0]], "demote");
              _0x25e00e.sendMessage(_0x286af2.id, {
                'text': '@' + _0x286af2.author.split('@')[0] + " has violated the anti-promotion rule, therefore both " + _0x286af2.author.split('@')[0] + " and @" + _0x286af2.participants[0].split('@')[0] + " have been removed from administrative rights.",
                'mentions': [_0x286af2.author, _0x286af2.participants[0]]
              });
            } else {
              if (_0x286af2.action == "demote" && (await _0x131f2b(_0x286af2.id, "antidemote")) == 'on') {
                if (_0x286af2.author == _0x4a1fc7.owner || _0x286af2.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x286af2.author == decodeJid(_0x25e00e.user.id) || _0x286af2.author == _0x286af2.participants[0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x25e00e.groupParticipantsUpdate(_0x286af2.id, [_0x286af2.author], "demote");
                await _0x25e00e.groupParticipantsUpdate(_0x286af2.id, [_0x286af2.participants[0]], "promote");
                _0x25e00e.sendMessage(_0x286af2.id, {
                  'text': '@' + _0x286af2.author.split('@')[0] + " has violated the anti-demotion rule by removing @" + _0x286af2.participants[0].split('@')[0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x286af2.author, _0x286af2.participants[0]]
                });
              }
            }
          }
        }
      } catch (_0x283f71) {
        console.error(_0x283f71);
      }
    });
    async function _0x54cadd() {
      const _0x571cf7 = {
        dngpi: "announcement",
        IRSKm: "./media/chrono.webp",
        XsMEu: "Hello, it's time to close the group; sayonara.",
        XDULN: "not_announcement"
      };
      _0x571cf7.jWSKS = "Good morning; It's time to open the group.";
      const _0x41c5f8 = require("node-cron");
      const {
        getCron: _0x56f359
      } = require("./bdd/cron");
      let _0x23b5e5 = await _0x56f359();
      console.log(_0x23b5e5);
      if (_0x23b5e5.length > 0) {
        for (let _0x152ead = 0; _0x152ead < _0x23b5e5.length; _0x152ead++) {
          if (_0x23b5e5[_0x152ead].mute_at != null) {
            let _0x31d581 = _0x23b5e5[_0x152ead].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x23b5e5[_0x152ead].group_id + " a " + _0x31d581[0] + " H " + _0x31d581[1]);
            const _0x1e0395 = {
              timezone: "Bungoma,Kenya"
            };
            _0x41c5f8.schedule(_0x31d581[1] + " " + _0x31d581[0] + " * * *", async () => {
              await _0x25e00e.groupSettingUpdate(_0x23b5e5[_0x152ead].group_id, "announcement");
              const _0x2c54f5 = {
                url: "./media/chrono.webp"
              };
              const _0x2a31f3 = {
                image: _0x2c54f5,
                caption: "Hello, it's time to close the group; sayonara."
              };
              _0x25e00e.sendMessage(_0x23b5e5[_0x152ead].group_id, _0x2a31f3);
            }, _0x1e0395);
          }
          if (_0x23b5e5[_0x152ead].unmute_at != null) {
            let _0x3522f4 = _0x23b5e5[_0x152ead].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x3522f4[0] + " H " + _0x3522f4[1] + " ");
            const _0x1dca14 = {
              timezone: "Bungoma,Kenya"
            };
            _0x41c5f8.schedule(_0x3522f4[1] + " " + _0x3522f4[0] + " * * *", async () => {
              await _0x25e00e.groupSettingUpdate(_0x23b5e5[_0x152ead].group_id, "not_announcement");
              const _0x28f5a6 = {
                url: "./media/chrono.webp"
              };
              const _0x107a0d = {
                image: _0x28f5a6
              };
              _0x107a0d.caption = _0x571cf7.jWSKS;
              _0x25e00e.sendMessage(_0x23b5e5[_0x152ead].group_id, _0x107a0d);
            }, _0x1dca14);
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x25e00e.ev.on("contacts.upsert", async _0x400bea => {
      const _0x562ea2 = _0xff1625 => {
        for (const _0x114378 of _0xff1625) {
          if (store.contacts[_0x114378.id]) {
            Object.assign(store.contacts[_0x114378.id], _0x114378);
          } else {
            store.contacts[_0x114378.id] = _0x114378;
          }
        }
        return;
      };
      _0x562ea2(_0x400bea);
    });
    _0x25e00e.ev.on("connection.update", async _0x47742f => {
      const {
        lastDisconnect: _0x6e6ddf,
        connection: _0xc59038
      } = _0x47742f;
      if (_0xc59038 === "connecting") {
        console.log("ℹ️ Connexion en cours...");
      } else {
        if (_0xc59038 === "open") {
          console.log("✅ connexion reussie! ☺️");
          console.log('--');
          0;
          await baileys_1.delay(200);
          console.log("------");
          0;
          await baileys_1.delay(300);
          console.log("------------------/-----");
          console.log("le bot est en ligne 🕸\n\n");
          console.log("chargement des commandes ...\n");
          fs.readdirSync(__dirname + "/commandes").forEach(_0x1ce703 => {
            if (path.extname(_0x1ce703).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0x1ce703);
                console.log(_0x1ce703 + " installé ✔️");
              } catch (_0x2cd60a) {
                console.log(_0x1ce703 + " n'a pas pu être chargé pour les raisons suivantes : " + _0x2cd60a);
              }
              0;
              baileys_1.delay(300);
            }
          });
          0;
          baileys_1.delay(700);
          var _0xec682b;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0xec682b = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0xec682b = "private";
          } else {
            _0xec682b = "undefined";
          }
          console.log("chargement des commandes terminé ✅");
          await _0x54cadd();
          if (conf.DP.toLowerCase() === "yes") {
            let _0xbfbb6 = "╭════⊷\n║ *『𝐀𝐋𝐏𝐇𝐀-𝐌𝐃 𝐢𝐬 𝐎𝐧𝐥𝐢𝐧𝐞』*\n║    Creator: *keithkeizzah*\n║    Prefix : [ " + prefixe + " ]\n║    Mode :" + _0xec682b + "\n║    Total Commands : " + evt.cm.length + "︎\n╰═════════════════⊷\n\n╭───◇\n┃\n┃ *Thank you for choosing*                      \n┃  *ALPHA-MD*\n> Regards keithkeizzah \n╰═════════════════⊷";
            const _0x23ba36 = {
              text: _0xbfbb6
            };
            await _0x25e00e.sendMessage(_0x25e00e.user.id, _0x23ba36);
          }
        } else {
          if (_0xc59038 == "close") {
            let _0x3f074b = new boom_1.Boom(_0x6e6ddf?.["error"])?.["output"]["statusCode"];
            if (_0x3f074b === baileys_1.DisconnectReason.badSession) {
              console.log("Session id érronée veuillez rescanner le qr svp ...");
            } else {
              if (_0x3f074b === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x244966();
              } else {
                if (_0x3f074b === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
                  _0x244966();
                } else {
                  if (_0x3f074b === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x3f074b === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x3f074b === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x244966();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x3f074b);
                        const {
                          exec: _0x2e7b40
                        } = require("child_process");
                        _0x2e7b40("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0xc59038);
            _0x244966();
          }
        }
      }
    });
    _0x25e00e.ev.on("creds.update", _0x37979d);
    _0x25e00e.downloadAndSaveMediaMessage = async (_0x5f4b56, _0x1e7a5d = '', _0x2451b5 = true) => {
      let _0x4ed853 = _0x5f4b56.msg ? _0x5f4b56.msg : _0x5f4b56;
      let _0x14d728 = (_0x5f4b56.msg || _0x5f4b56).mimetype || '';
      let _0x27e19c = _0x5f4b56.mtype ? _0x5f4b56.mtype.replace(/Message/gi, '') : _0x14d728.split('/')[0];
      0;
      const _0x4ffe6c = await baileys_1.downloadContentFromMessage(_0x4ed853, _0x27e19c);
      let _0x8088b2 = Buffer.from([]);
      for await (const _0x435a34 of _0x4ffe6c) {
        _0x8088b2 = Buffer.concat([_0x8088b2, _0x435a34]);
      }
      let _0x570ef0 = await FileType.fromBuffer(_0x8088b2);
      let _0x4bd616 = './' + _0x1e7a5d + '.' + _0x570ef0.ext;
      await fs.writeFileSync(_0x4bd616, _0x8088b2);
      return _0x4bd616;
    };
    _0x25e00e.awaitForMessage = async (_0x5e1b36 = {}) => {
      return new Promise((_0xe636b7, _0x5c9e2b) => {
        if (typeof _0x5e1b36 !== "object") {
          _0x5c9e2b(new Error("Options must be an object"));
        }
        if (typeof _0x5e1b36.sender !== "string") {
          _0x5c9e2b(new Error("Sender must be a string"));
        }
        if (typeof _0x5e1b36.chatJid !== "string") {
          _0x5c9e2b(new Error("ChatJid must be a string"));
        }
        if (_0x5e1b36.timeout && typeof _0x5e1b36.timeout !== "number") {
          _0x5c9e2b(new Error("Timeout must be a number"));
        }
        if (_0x5e1b36.filter && typeof _0x5e1b36.filter !== "function") {
          _0x5c9e2b(new Error("Filter must be a function"));
        }
        const _0xd4adf0 = _0x5e1b36?.["timeout"] || undefined;
        const _0x2c9ddd = _0x5e1b36?.["filter"] || (() => true);
        let _0x44f173 = undefined;
        let _0x21c4a5 = _0x56f503 => {
          let {
            type: _0x105da9,
            messages: _0x279d06
          } = _0x56f503;
          if (_0x105da9 == "notify") {
            for (let _0x429766 of _0x279d06) {
              const _0x51e8c6 = _0x429766.key.fromMe;
              const _0x2724f4 = _0x429766.key.remoteJid;
              const _0xee1731 = _0x2724f4.endsWith("@g.us");
              const _0x16622c = _0x2724f4 == "status@broadcast";
              const _0x354dee = _0x51e8c6 ? _0x25e00e.user.id.replace(/:.*@/g, '@') : _0xee1731 || _0x16622c ? _0x429766.key.participant.replace(/:.*@/g, '@') : _0x2724f4;
              if (_0x354dee == _0x5e1b36.sender && _0x2724f4 == _0x5e1b36.chatJid && _0x2c9ddd(_0x429766)) {
                _0x25e00e.ev.off("messages.upsert", _0x21c4a5);
                clearTimeout(_0x44f173);
                _0xe636b7(_0x429766);
              }
            }
          }
        };
        _0x25e00e.ev.on("messages.upsert", _0x21c4a5);
        if (_0xd4adf0) {
          _0x44f173 = setTimeout(() => {
            _0x25e00e.ev.off("messages.upsert", _0x21c4a5);
            _0x5c9e2b(new Error("Timeout"));
          }, _0xd4adf0);
        }
      });
    };
    return _0x25e00e;
  }
  let _0x3893c5 = require.resolve(__filename);
  fs.watchFile(_0x3893c5, () => {
    fs.unwatchFile(_0x3893c5);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x3893c5];
    require(_0x3893c5);
  });
  _0x244966();
}, 5000);
(function () {
  let _0x706c4e;
  try {
    const _0x50747c = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x706c4e = _0x50747c();
  } catch (_0x2b4e53) {
    _0x706c4e = window;
  }
  _0x706c4e.setInterval(_0x896656, 4000);
})();
function _0x896656(_0x1de63e) {
  function _0x240eba(_0x5ef15a) {
    if (typeof _0x5ef15a === "string") {
      return function (_0x2ded13) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x5ef15a / _0x5ef15a).length !== 1 || _0x5ef15a % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x240eba(++_0x5ef15a);
  }
  try {
    if (_0x1de63e) {
      return _0x240eba;
    } else {
      _0x240eba(0);
    }
  } catch (_0x3f52cf) {}
}
