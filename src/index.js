module.exports = function toReadable (number) {
  let zero='zero', one='one', two='two',three='three',four='four',five='five',six='six',
  seven='seven',eight='eight',nine='nine', ten = 'ten', eleven = 'eleven', twelve = 'twelve',
  thirteen = 'thirteen', fourteen = 'fourteen', fifteen = 'fifteen', sixteen = 'sixteen', seventeen = 'seventeen', eighteen = 'eighteen', nineteen = 'nineteen', oneHundred = 'one hundred ',
  twoHundred = 'two hundred ', threeHundred = 'three hundred ', fourHundred = 'four hundred ', fiveHundred = 'five hundred ', sixHundred = 'six hundred ', sevenHundred = 'seven hundred ',
  eightHundred = 'eight hundred ', nineHundred = 'nine hundred ';
  switch (number) {
    case 0:
      return zero;
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    case 7:
      return seven;
    case 8:
      return eight;
    case 9:
      return nine;
    case 10:
      return ten;
    case 11:
      return eleven;
    case 12:
      return twelve;
    case 13:
      return thirteen;
    case 14:
      return fourteen;
    case 15:
      return fifteen;
    case 16:
      return sixteen;
    case 17:
      return seventeen;
    case 18:
      return eighteen;
    case 19:
      return nineteen;
    case 20:
      return 'twenty';
    case 21:
      return 'twenty' + ' one';
    case 22:
      return 'twenty' + ' two';
    case 23:
      return 'twenty' + ' three';
    case 24:
      return 'twenty' + ' four';
    case 25:
      return 'twenty' + ' five';
    case 26:
      return 'twenty' + ' six';
    case 27:
      return 'twenty' + ' seven';
    case 28:
      return 'twenty' + ' eight';
    case 29:
      return 'twenty' + ' nine';

    case 30:
      return 'thirty';
    case 31:
      return 'thirty' + ' one';
    case 32:
      return 'thirty' + ' two';
    case 33:
      return 'thirty' + ' three';
    case 34:
      return 'thirty' + ' four';
    case 35:
      return 'thirty' + ' five';
    case 36:
      return 'thirty' + ' six';
    case 37:
      return 'thirty' + ' seven';
    case 38:
      return 'thirty' + ' eight';
    case 39:
      return 'thirty' + ' nine';


    case 40:
      return 'forty';
    case 41:
      return 'forty' + ' one';
    case 42:
      return 'forty' + ' two';
    case 43:
      return 'forty' + ' three';
    case 44:
      return 'forty' + ' four';
    case 45:
      return 'forty' + ' five';
    case 46:
      return 'forty' + ' six';
    case 47:
      return 'forty' + ' seven';
    case 48:
      return 'forty' + ' eight';
    case 49:
      return 'forty' + ' nine';

    case 50:
      return 'fifty';
    case 51:
      return 'fifty' + ' one';
    case 52:
      return 'fifty' + ' two';
    case 53:
      return 'fifty' + ' three';
    case 54:
      return 'fifty' + ' four';
    case 55:
      return 'fifty' + ' five';
    case 56:
      return 'fifty' + ' six';
    case 57:
      return 'fifty' + ' seven';
    case 58:
      return 'fifty' + ' eight';
    case 59:
      return 'fifty' + ' nine';
    
    case 60:
      return 'sixty';
    case 61:
      return 'sixty' + ' one';
    case 62:
      return 'sixty' + ' two';
    case 63:
      return 'sixty' + ' three';
    case 64:
      return 'sixty' + ' four';
    case 65:
      return 'sixty' + ' five';
    case 66:
      return 'sixty' + ' six';
    case 67:
      return 'sixty' + ' seven';
    case 68:
      return 'sixty' + ' eight';
    case 69:
      return 'sixty' + ' nine';

    case 70:
      return 'seventy';
    case 71:
      return 'seventy' + ' one';
    case 72:
      return 'seventy' + ' two';
    case 73:
      return 'seventy' + ' three';
    case 74:
      return 'seventy' + ' four';
    case 75:
      return 'seventy' + ' five';
    case 76:
      return 'seventy' + ' six';
    case 77:
      return 'seventy' + ' seven';
    case 78:
      return 'seventy' + ' eight';
    case 79:
      return 'seventy' + ' nine';

    case 80:
      return 'eighty';
    case 81:
      return 'eighty' + ' one';
    case 82:
      return 'eighty' + ' two';
    case 83:
      return 'eighty' + ' three';
    case 84:
      return 'eighty' + ' four';
    case 85:
      return 'eighty' + ' five';
    case 86:
      return 'eighty' + ' six';
    case 87:
      return 'eighty' + ' seven';
    case 88:
      return 'eighty' + ' eight';
    case 89:
      return 'eighty' + ' nine';

    case 90:
      return 'ninety';
    case 91:
      return 'ninety' + ' one';
    case 92:
      return 'ninety' + ' two';
    case 93:
      return 'ninety' + ' three';
    case 94:
      return 'ninety' + ' four';
    case 95:
      return 'ninety' + ' five';
    case 96:
      return 'ninety' + ' six';
    case 97:
      return 'ninety' + ' seven';
    case 98:
      return 'ninety' + ' eight';
    case 99:
      return 'ninety' + ' nine';


/* *********************One hundred************************  */

    case 100:
      return 'one hundred';
    case 101:
      return oneHundred + one;
    case 102:
      return oneHundred + two;
    case 103:
      return oneHundred + three;
    case 104:
      return oneHundred + four;
    case 105:
      return oneHundred + five;
    case 106:
      return oneHundred + six;
    case 107:
      return oneHundred + seven;
    case 108:
      return oneHundred + eight;
    case 109:
      return oneHundred + nine;
    case 110:
      return oneHundred + ten;
    case 111:
      return oneHundred + eleven; 
    case 112:
      return oneHundred + twelve; 
    case 113:
      return oneHundred + thirteen;
    case 114:
      return oneHundred + fourteen;
    case 115:
      return oneHundred + fifteen;
    case 116:
      return oneHundred + sixteen;
    case 117:
      return oneHundred + seventeen;
    case 118:
      return oneHundred + eighteen;
    case 119:
      return oneHundred + nineteen;
    case 120:
      return oneHundred + 'twenty';
    case 121:
      return oneHundred + 'twenty ' + 'one';
    case 122:
      return oneHundred + 'twenty ' + 'two';
    case 123:
      return oneHundred + 'twenty ' + 'three';
    case 124:
      return oneHundred + 'twenty ' + 'four';
    case 125:
      return oneHundred + 'twenty ' + 'five';
    case 126:
      return oneHundred + 'twenty ' + 'six';
    case 127:
      return oneHundred + 'twenty ' + 'seven';
    case 128:
      return oneHundred + 'twenty ' + 'eight';
    case 129:
      return oneHundred + 'twenty ' + 'nine';
    case 130:
      return oneHundred + 'thirty';
    case 131:
      return oneHundred + 'thirty ' + 'one';
    case 132:
      return oneHundred + 'thirty ' + 'two';
    case 133:
      return oneHundred + 'thirty ' + 'three';
    case 134:
      return oneHundred + 'thirty ' + 'four';
    case 135:
      return oneHundred + 'thirty ' + 'five';
    case 136:
      return oneHundred + 'thirty ' + 'six';
    case 137:
      return oneHundred + 'thirty ' + 'seven';
    case 138:
      return oneHundred + 'thirty ' + 'eight';
    case 139:
      return oneHundred + 'thirty ' + 'nine';
    case 140:
      return oneHundred + 'forty';
    case 141:
      return oneHundred + 'forty '  + 'one';
    case 142:
      return oneHundred + 'forty '  + 'two';
    case 143:
      return oneHundred + 'forty '  + 'three';
    case 144:
      return oneHundred + 'forty '  + 'four';
    case 145:
      return oneHundred + 'forty '  + 'five';
    case 146:
      return oneHundred + 'forty '  + 'six';
    case 147:
      return oneHundred + 'forty '  + 'seven';
    case 148:
      return oneHundred + 'forty '  + 'eight';
    case 149:
      return oneHundred + 'forty '  + 'nine';
    case 150:
      return oneHundred + 'fifty';
    case 151:
      return oneHundred + 'fifty '  + 'one';
    case 152:
      return oneHundred + 'fifty '  + 'two';
    case 153:
      return oneHundred + 'fifty '  + 'three';
    case 154:
      return oneHundred + 'fifty '  + 'four';
    case 155:
      return oneHundred + 'fifty '  + 'five';
    case 156:
      return oneHundred + 'fifty '  + 'six';
    case 157:
      return oneHundred + 'fifty '  + 'seven';
    case 158:
      return oneHundred + 'fifty '  + 'eight';
    case 159:
      return oneHundred + 'fifty '  + 'nine';
    case 160:
      return oneHundred + 'sixty' ;
    case 161:
      return oneHundred + 'sixty '  + 'one';
    case 162:
      return oneHundred + 'sixty '  + 'two';
    case 163:
      return oneHundred + 'sixty '  + 'three';
    case 164:
      return oneHundred + 'sixty '  + 'four';
    case 165:
      return oneHundred + 'sixty '  + 'five';
    case 166:
      return oneHundred + 'sixty '  + 'six';
    case 167:
      return oneHundred + 'sixty '  + 'seven';
    case 168:
      return oneHundred + 'sixty '  + 'eight';
    case 169:
      return oneHundred + 'sixty '  + 'nine';
    case 170:
      return oneHundred + 'seventy';
    case 171:
      return oneHundred + 'seventy ' + 'one';
    case 172:
      return oneHundred + 'seventy ' + 'two';
    case 173:
      return oneHundred + 'seventy ' + 'three';
    case 174:
      return oneHundred + 'seventy ' + 'four';
    case 175:
      return oneHundred + 'seventy ' + 'five';
    case 176:
      return oneHundred + 'seventy ' + 'six';
    case 177:
      return oneHundred + 'seventy ' + 'seven';
    case 178:
      return oneHundred + 'seventy ' + 'eight';
    case 179:
      return oneHundred + 'seventy ' + 'nine';
    case 180:
      return oneHundred + 'eighty';
    case 181:
      return oneHundred + 'eighty ' + 'one';
    case 182:
      return oneHundred + 'eighty ' + 'two';
    case 183:
      return oneHundred + 'eighty ' + 'three';
    case 184:
      return oneHundred + 'eighty ' + 'four';
    case 185:
      return oneHundred + 'eighty ' + 'five';
    case 186:
      return oneHundred + 'eighty ' + 'six';
    case 187:
      return oneHundred + 'eighty ' + 'seven';
    case 188:
      return oneHundred + 'eighty ' + 'eight';
    case 189:
      return oneHundred + 'eighty ' + 'nine';

    case 190:
      return oneHundred + 'ninety';
    case 191:
      return oneHundred + 'ninety ' + 'one';
    case 192:
      return oneHundred + 'ninety ' + 'two';
    case 193:
      return oneHundred + 'ninety ' + 'three';
    case 194:
      return oneHundred + 'ninety ' + 'four';
    case 195:
      return oneHundred + 'ninety ' + 'five';
    case 196:
      return oneHundred + 'ninety ' + 'six';
    case 197:
      return oneHundred + 'ninety ' + 'seven';
    case 198:
      return oneHundred + 'ninety ' + 'eight';
    case 199:
      return oneHundred + 'ninety ' + 'nine';
/* *********************One hundred************************  */

    case 100:
      return 'one hundred';
    case 101:
      return oneHundred + one;
    case 102:
      return oneHundred + two;
    case 103:
      return oneHundred + three;
    case 104:
      return oneHundred + four;
    case 105:
      return oneHundred + five;
    case 106:
      return oneHundred + six;
    case 107:
      return oneHundred + seven;
    case 108:
      return oneHundred + eight;
    case 109:
      return oneHundred + nine;
    case 110:
      return oneHundred + ten;
    case 111:
      return oneHundred + eleven; 
    case 112:
      return oneHundred + twelve; 
    case 113:
      return oneHundred + thirteen;
    case 114:
      return oneHundred + fourteen;
    case 115:
      return oneHundred + fifteen;
    case 116:
      return oneHundred + sixteen;
    case 117:
      return oneHundred + seventeen;
    case 118:
      return oneHundred + eighteen;
    case 119:
      return oneHundred + nineteen;
    case 120:
      return oneHundred + 'twenty';
    case 121:
      return oneHundred + 'twenty ' + 'one';
    case 122:
      return oneHundred + 'twenty ' + 'two';
    case 123:
      return oneHundred + 'twenty ' + 'three';
    case 124:
      return oneHundred + 'twenty ' + 'four';
    case 125:
      return oneHundred + 'twenty ' + 'five';
    case 126:
      return oneHundred + 'twenty ' + 'six';
    case 127:
      return oneHundred + 'twenty ' + 'seven';
    case 128:
      return oneHundred + 'twenty ' + 'eight';
    case 129:
      return oneHundred + 'twenty ' + 'nine';
    case 130:
      return oneHundred + 'thirty';
    case 131:
      return oneHundred + 'thirty ' + 'one';
    case 132:
      return oneHundred + 'thirty ' + 'two';
    case 133:
      return oneHundred + 'thirty ' + 'three';
    case 134:
      return oneHundred + 'thirty ' + 'four';
    case 135:
      return oneHundred + 'thirty ' + 'five';
    case 136:
      return oneHundred + 'thirty ' + 'six';
    case 137:
      return oneHundred + 'thirty ' + 'seven';
    case 138:
      return oneHundred + 'thirty ' + 'eight';
    case 139:
      return oneHundred + 'thirty ' + 'nine';
    case 140:
      return oneHundred + 'forty';
    case 141:
      return oneHundred + 'forty '  + 'one';
    case 142:
      return oneHundred + 'forty '  + 'two';
    case 143:
      return oneHundred + 'forty '  + 'three';
    case 144:
      return oneHundred + 'forty '  + 'four';
    case 145:
      return oneHundred + 'forty '  + 'five';
    case 146:
      return oneHundred + 'forty '  + 'six';
    case 147:
      return oneHundred + 'forty '  + 'seven';
    case 148:
      return oneHundred + 'forty '  + 'eight';
    case 149:
      return oneHundred + 'forty '  + 'nine';
    case 150:
      return oneHundred + 'fifty';
    case 151:
      return oneHundred + 'fifty '  + 'one';
    case 152:
      return oneHundred + 'fifty '  + 'two';
    case 153:
      return oneHundred + 'fifty '  + 'three';
    case 154:
      return oneHundred + 'fifty '  + 'four';
    case 155:
      return oneHundred + 'fifty '  + 'five';
    case 156:
      return oneHundred + 'fifty '  + 'six';
    case 157:
      return oneHundred + 'fifty '  + 'seven';
    case 158:
      return oneHundred + 'fifty '  + 'eight';
    case 159:
      return oneHundred + 'fifty '  + 'nine';
    case 160:
      return oneHundred + 'sixty' ;
    case 161:
      return oneHundred + 'sixty '  + 'one';
    case 162:
      return oneHundred + 'sixty '  + 'two';
    case 163:
      return oneHundred + 'sixty '  + 'three';
    case 164:
      return oneHundred + 'sixty '  + 'four';
    case 165:
      return oneHundred + 'sixty '  + 'five';
    case 166:
      return oneHundred + 'sixty '  + 'six';
    case 167:
      return oneHundred + 'sixty '  + 'seven';
    case 168:
      return oneHundred + 'sixty '  + 'eight';
    case 169:
      return oneHundred + 'sixty '  + 'nine';
    case 170:
      return oneHundred + 'seventy';
    case 171:
      return oneHundred + 'seventy ' + 'one';
    case 172:
      return oneHundred + 'seventy ' + 'two';
    case 173:
      return oneHundred + 'seventy ' + 'three';
    case 174:
      return oneHundred + 'seventy ' + 'four';
    case 175:
      return oneHundred + 'seventy ' + 'five';
    case 176:
      return oneHundred + 'seventy ' + 'six';
    case 177:
      return oneHundred + 'seventy ' + 'seven';
    case 178:
      return oneHundred + 'seventy ' + 'eight';
    case 179:
      return oneHundred + 'seventy ' + 'nine';
    case 180:
      return oneHundred + 'eighty';
    case 181:
      return oneHundred + 'eighty ' + 'one';
    case 182:
      return oneHundred + 'eighty ' + 'two';
    case 183:
      return oneHundred + 'eighty ' + 'three';
    case 184:
      return oneHundred + 'eighty ' + 'four';
    case 185:
      return oneHundred + 'eighty ' + 'five';
    case 186:
      return oneHundred + 'eighty ' + 'six';
    case 187:
      return oneHundred + 'eighty ' + 'seven';
    case 188:
      return oneHundred + 'eighty ' + 'eight';
    case 189:
      return oneHundred + 'eighty ' + 'nine';

    case 190:
      return oneHundred + 'ninety';
    case 191:
      return oneHundred + 'ninety ' + 'one';
    case 192:
      return oneHundred + 'ninety ' + 'two';
    case 193:
      return oneHundred + 'ninety ' + 'three';
    case 194:
      return oneHundred + 'ninety ' + 'four';
    case 195:
      return oneHundred + 'ninety ' + 'five';
    case 196:
      return oneHundred + 'ninety ' + 'six';
    case 197:
      return oneHundred + 'ninety ' + 'seven';
    case 198:
      return oneHundred + 'ninety ' + 'eight';
    case 199:
      return oneHundred + 'ninety ' + 'nine';
    /* *********************Two hundred************************  */

    case 200:
      return 'two hundred';
    case 201:
      return twoHundred + one;
    case 202:
      return twoHundred + two;
    case 203:
      return twoHundred + three;
    case 204:
      return twoHundred + four;
    case 205:
      return twoHundred + five;
    case 206:
      return twoHundred + six;
    case 207:
      return twoHundred + seven;
    case 208:
      return twoHundred + eight;
    case 209:
      return twoHundred + nine;
    case 210:
      return twoHundred + ten;
    case 211:
      return twoHundred + eleven; 
    case 212:
      return twoHundred + twelve; 
    case 213:
      return twoHundred + thirteen;
    case 214:
      return twoHundred + fourteen;
    case 215:
      return twoHundred + fifteen;
    case 216:
      return twoHundred + sixteen;
    case 217:
      return twoHundred + seventeen;
    case 218:
      return twoHundred + eighteen;
    case 219:
      return twoHundred + nineteen;
    case 220:
      return twoHundred + 'twenty';
    case 221:
      return twoHundred + 'twenty ' + 'one';
    case 222:
      return twoHundred + 'twenty ' + 'two';
    case 223:
      return twoHundred + 'twenty ' + 'three';
    case 224:
      return twoHundred + 'twenty ' + 'four';
    case 225:
      return twoHundred + 'twenty ' + 'five';
    case 226:
      return twoHundred + 'twenty ' + 'six';
    case 227:
      return twoHundred + 'twenty ' + 'seven';
    case 228:
      return twoHundred + 'twenty ' + 'eight';
    case 229:
      return twoHundred + 'twenty ' + 'nine';
    case 230:
      return twoHundred + 'thirty';
    case 231:
      return twoHundred + 'thirty ' + 'one';
    case 232:
      return twoHundred + 'thirty ' + 'two';
    case 233:
      return twoHundred + 'thirty ' + 'three';
    case 234:
      return twoHundred + 'thirty ' + 'four';
    case 235:
      return twoHundred + 'thirty ' + 'five';
    case 236:
      return twoHundred + 'thirty ' + 'six';
    case 237:
      return twoHundred + 'thirty ' + 'seven';
    case 238:
      return twoHundred + 'thirty ' + 'eight';
    case 239:
      return twoHundred + 'thirty ' + 'nine';
    case 240:
      return twoHundred + 'forty';
    case 241:
      return twoHundred + 'forty '  + 'one';
    case 242:
      return twoHundred + 'forty '  + 'two';
    case 243:
      return twoHundred + 'forty '  + 'three';
    case 244:
      return twoHundred + 'forty '  + 'four';
    case 245:
      return twoHundred + 'forty '  + 'five';
    case 246:
      return twoHundred + 'forty '  + 'six';
    case 247:
      return twoHundred + 'forty '  + 'seven';
    case 248:
      return twoHundred + 'forty '  + 'eight';
    case 249:
      return twoHundred + 'forty '  + 'nine';
    case 250:
      return twoHundred + 'fifty';
    case 251:
      return twoHundred + 'fifty '  + 'one';
    case 252:
      return twoHundred + 'fifty '  + 'two';
    case 253:
      return twoHundred + 'fifty '  + 'three';
    case 254:
      return twoHundred + 'fifty '  + 'four';
    case 255:
      return twoHundred + 'fifty '  + 'five';
    case 256:
      return twoHundred + 'fifty '  + 'six';
    case 257:
      return twoHundred + 'fifty '  + 'seven';
    case 258:
      return twoHundred + 'fifty '  + 'eight';
    case 259:
      return twoHundred + 'fifty '  + 'nine';
    case 260:
      return twoHundred + 'sixty' ;
    case 261:
      return twoHundred + 'sixty '  + 'one';
    case 262:
      return twoHundred + 'sixty '  + 'two';
    case 263:
      return twoHundred + 'sixty '  + 'three';
    case 264:
      return twoHundred + 'sixty '  + 'four';
    case 265:
      return twoHundred + 'sixty '  + 'five';
    case 266:
      return twoHundred + 'sixty '  + 'six';
    case 267:
      return twoHundred + 'sixty '  + 'seven';
    case 268:
      return twoHundred + 'sixty '  + 'eight';
    case 269:
      return twoHundred + 'sixty '  + 'nine';
    case 270:
      return twoHundred + 'seventy';
    case 271:
      return twoHundred + 'seventy ' + 'one';
    case 272:
      return twoHundred + 'seventy ' + 'two';
    case 273:
      return twoHundred + 'seventy ' + 'three';
    case 274:
      return twoHundred + 'seventy ' + 'four';
    case 275:
      return twoHundred + 'seventy ' + 'five';
    case 276:
      return twoHundred + 'seventy ' + 'six';
    case 277:
      return twoHundred + 'seventy ' + 'seven';
    case 278:
      return twoHundred + 'seventy ' + 'eight';
    case 279:
      return twoHundred + 'seventy ' + 'nine';
    case 280:
      return twoHundred + 'eighty';
    case 281:
      return twoHundred + 'eighty ' + 'one';
    case 282:
      return twoHundred + 'eighty ' + 'two';
    case 283:
      return twoHundred + 'eighty ' + 'three';
    case 284:
      return twoHundred + 'eighty ' + 'four';
    case 285:
      return twoHundred + 'eighty ' + 'five';
    case 286:
      return twoHundred + 'eighty ' + 'six';
    case 287:
      return twoHundred + 'eighty ' + 'seven';
    case 288:
      return twoHundred + 'eighty ' + 'eight';
    case 289:
      return twoHundred + 'eighty ' + 'nine';
    case 290:
      return twoHundred + 'ninety';
    case 291:
      return twoHundred + 'ninety ' + 'one';
    case 292:
      return twoHundred + 'ninety ' + 'two';
    case 293:
      return twoHundred + 'ninety ' + 'three';
    case 294:
      return twoHundred + 'ninety ' + 'four';
    case 295:
      return twoHundred + 'ninety ' + 'five';
    case 296:
      return twoHundred + 'ninety ' + 'six';
    case 297:
      return twoHundred + 'ninety ' + 'seven';
    case 298:
      return twoHundred + 'ninety ' + 'eight';
    case 299:
      return twoHundred + 'ninety ' + 'nine';

    /* *********************Three hundred************************  */

    case 300:
      return 'three hundred';
    case 301:
      return threeHundred + one;
    case 302:
      return threeHundred + two;
    case 303:
      return threeHundred + three;
    case 304:
      return threeHundred + four;
    case 305:
      return threeHundred + five;
    case 306:
      return threeHundred + six;
    case 307:
      return threeHundred + seven;
    case 308:
      return threeHundred + eight;
    case 309:
      return threeHundred + nine;
    case 310:
      return threeHundred + ten;
    case 311:
      return threeHundred + eleven; 
    case 312:
      return threeHundred + twelve; 
    case 313:
      return threeHundred + thirteen;
    case 314:
      return threeHundred + fourteen;
    case 315:
      return threeHundred + fifteen;
    case 316:
      return threeHundred + sixteen;
    case 317:
      return threeHundred + seventeen;
    case 318:
      return threeHundred + eighteen;
    case 319:
      return threeHundred + nineteen;
    case 320:
      return threeHundred + 'twenty';
    case 321:
      return threeHundred + 'twenty ' + 'one';
    case 322:
      return threeHundred + 'twenty ' + 'two';
    case 323:
      return threeHundred + 'twenty ' + 'three';
    case 324:
      return threeHundred + 'twenty ' + 'four';
    case 325:
      return threeHundred + 'twenty ' + 'five';
    case 326:
      return threeHundred + 'twenty ' + 'six';
    case 327:
      return threeHundred + 'twenty ' + 'seven';
    case 328:
      return threeHundred + 'twenty ' + 'eight';
    case 329:
      return threeHundred + 'twenty ' + 'nine';
    case 330:
      return threeHundred + 'thirty';
    case 331:
      return threeHundred + 'thirty ' + 'one';
    case 332:
      return threeHundred + 'thirty ' + 'two';
    case 333:
      return threeHundred + 'thirty ' + 'three';
    case 334:
      return threeHundred + 'thirty ' + 'four';
    case 335:
      return threeHundred + 'thirty ' + 'five';
    case 336:
      return threeHundred + 'thirty ' + 'six';
    case 337:
      return threeHundred + 'thirty ' + 'seven';
    case 338:
      return threeHundred + 'thirty ' + 'eight';
    case 339:
      return threeHundred + 'thirty ' + 'nine';
    case 340:
      return threeHundred + 'forty';
    case 341:
      return threeHundred + 'forty '  + 'one';
    case 342:
      return threeHundred + 'forty '  + 'two';
    case 343:
      return threeHundred + 'forty '  + 'three';
    case 344:
      return threeHundred + 'forty '  + 'four';
    case 345:
      return threeHundred + 'forty '  + 'five';
    case 346:
      return threeHundred + 'forty '  + 'six';
    case 347:
      return threeHundred + 'forty '  + 'seven';
    case 348:
      return threeHundred + 'forty '  + 'eight';
    case 349:
      return threeHundred + 'forty '  + 'nine';
    case 350:
      return threeHundred + 'fifty';
    case 351:
      return threeHundred + 'fifty '  + 'one';
    case 352:
      return threeHundred + 'fifty '  + 'two';
    case 353:
      return threeHundred + 'fifty '  + 'three';
    case 354:
      return threeHundred + 'fifty '  + 'four';
    case 355:
      return threeHundred + 'fifty '  + 'five';
    case 356:
      return threeHundred + 'fifty '  + 'six';
    case 357:
      return threeHundred + 'fifty '  + 'seven';
    case 358:
      return threeHundred + 'fifty '  + 'eight';
    case 359:
      return threeHundred + 'fifty '  + 'nine';
    case 360:
      return threeHundred + 'sixty' ;
    case 361:
      return threeHundred + 'sixty '  + 'one';
    case 362:
      return threeHundred + 'sixty '  + 'two';
    case 363:
      return threeHundred + 'sixty '  + 'three';
    case 364:
      return threeHundred + 'sixty '  + 'four';
    case 365:
      return threeHundred + 'sixty '  + 'five';
    case 366:
      return threeHundred + 'sixty '  + 'six';
    case 367:
      return threeHundred + 'sixty '  + 'seven';
    case 368:
      return threeHundred + 'sixty '  + 'eight';
    case 369:
      return threeHundred + 'sixty '  + 'nine';
    case 370:
      return threeHundred + 'seventy';
    case 371:
      return threeHundred + 'seventy ' + 'one';
    case 372:
      return threeHundred + 'seventy ' + 'two';
    case 373:
      return threeHundred + 'seventy ' + 'three';
    case 374:
      return threeHundred + 'seventy ' + 'four';
    case 375:
      return threeHundred + 'seventy ' + 'five';
    case 376:
      return threeHundred + 'seventy ' + 'six';
    case 377:
      return threeHundred + 'seventy ' + 'seven';
    case 378:
      return threeHundred + 'seventy ' + 'eight';
    case 379:
      return threeHundred + 'seventy ' + 'nine';
    case 380:
      return threeHundred + 'eighty';
    case 381:
      return threeHundred + 'eighty ' + 'one';
    case 382:
      return threeHundred + 'eighty ' + 'two';
    case 383:
      return threeHundred + 'eighty ' + 'three';
    case 384:
      return threeHundred + 'eighty ' + 'four';
    case 385:
      return threeHundred + 'eighty ' + 'five';
    case 386:
      return threeHundred + 'eighty ' + 'six';
    case 387:
      return threeHundred + 'eighty ' + 'seven';
    case 388:
      return threeHundred + 'eighty ' + 'eight';
    case 389:
      return threeHundred + 'eighty ' + 'nine';
    case 390:
      return threeHundred + 'ninety';
    case 391:
      return threeHundred + 'ninety ' + 'one';
    case 392:
      return threeHundred + 'ninety ' + 'two';
    case 393:
      return threeHundred + 'ninety ' + 'three';
    case 394:
      return threeHundred + 'ninety ' + 'four';
    case 395:
      return threeHundred + 'ninety ' + 'five';
    case 396:
      return threeHundred + 'ninety ' + 'six';
    case 397:
      return threeHundred + 'ninety ' + 'seven';
    case 398:
      return threeHundred + 'ninety ' + 'eight';
    case 399:
      return threeHundred + 'ninety ' + 'nine';
      
    /* *********************Four hundred************************  */

    case 400:
      return 'four hundred';
    case 401:
      return fourHundred + one;
    case 402:
      return fourHundred + two;
    case 403:
      return fourHundred + three;
    case 404:
      return fourHundred + four;
    case 405:
      return fourHundred + five;
    case 406:
      return fourHundred + six;
    case 407:
      return fourHundred + seven;
    case 408:
      return fourHundred + eight;
    case 409:
      return fourHundred + nine;
    case 410:
      return fourHundred + ten;
    case 411:
      return fourHundred + eleven; 
    case 412:
      return fourHundred + twelve; 
    case 413:
      return fourHundred + thirteen;
    case 414:
      return fourHundred + fourteen;
    case 415:
      return fourHundred + fifteen;
    case 416:
      return fourHundred + sixteen;
    case 417:
      return fourHundred + seventeen;
    case 418:
      return fourHundred + eighteen;
    case 419:
      return fourHundred + nineteen;
    case 420:
      return fourHundred + 'twenty';
    case 421:
      return fourHundred + 'twenty ' + 'one';
    case 422:
      return fourHundred + 'twenty ' + 'two';
    case 423:
      return fourHundred + 'twenty ' + 'three';
    case 424:
      return fourHundred + 'twenty ' + 'four';
    case 425:
      return fourHundred + 'twenty ' + 'five';
    case 426:
      return fourHundred + 'twenty ' + 'six';
    case 427:
      return fourHundred + 'twenty ' + 'seven';
    case 428:
      return fourHundred + 'twenty ' + 'eight';
    case 429:
      return fourHundred + 'twenty ' + 'nine';
    case 430:
      return fourHundred + 'thirty';
    case 431:
      return fourHundred + 'thirty ' + 'one';
    case 432:
      return fourHundred + 'thirty ' + 'two';
    case 433:
      return fourHundred + 'thirty ' + 'three';
    case 434:
      return fourHundred + 'thirty ' + 'four';
    case 435:
      return fourHundred + 'thirty ' + 'five';
    case 436:
      return fourHundred + 'thirty ' + 'six';
    case 437:
      return fourHundred + 'thirty ' + 'seven';
    case 438:
      return fourHundred + 'thirty ' + 'eight';
    case 439:
      return fourHundred + 'thirty ' + 'nine';
    case 440:
      return fourHundred + 'forty';
    case 441:
      return fourHundred + 'forty '  + 'one';
    case 442:
      return fourHundred + 'forty '  + 'two';
    case 443:
      return fourHundred + 'forty '  + 'three';
    case 444:
      return fourHundred + 'forty '  + 'four';
    case 445:
      return fourHundred + 'forty '  + 'five';
    case 446:
      return fourHundred + 'forty '  + 'six';
    case 447:
      return fourHundred + 'forty '  + 'seven';
    case 448:
      return fourHundred + 'forty '  + 'eight';
    case 449:
      return fourHundred + 'forty '  + 'nine';
    case 450:
      return fourHundred + 'fifty';
    case 451:
      return fourHundred + 'fifty '  + 'one';
    case 452:
      return fourHundred + 'fifty '  + 'two';
    case 453:
      return fourHundred + 'fifty '  + 'three';
    case 454:
      return fourHundred + 'fifty '  + 'four';
    case 455:
      return fourHundred + 'fifty '  + 'five';
    case 456:
      return fourHundred + 'fifty '  + 'six';
    case 457:
      return fourHundred + 'fifty '  + 'seven';
    case 458:
      return fourHundred + 'fifty '  + 'eight';
    case 459:
      return fourHundred + 'fifty '  + 'nine';
    case 460:
      return fourHundred + 'sixty' ;
    case 461:
      return fourHundred + 'sixty '  + 'one';
    case 462:
      return fourHundred + 'sixty '  + 'two';
    case 463:
      return fourHundred + 'sixty '  + 'three';
    case 464:
      return fourHundred + 'sixty '  + 'four';
    case 465:
      return fourHundred + 'sixty '  + 'five';
    case 466:
      return fourHundred + 'sixty '  + 'six';
    case 467:
      return fourHundred + 'sixty '  + 'seven';
    case 468:
      return fourHundred + 'sixty '  + 'eight';
    case 469:
      return fourHundred + 'sixty '  + 'nine';
    case 470:
      return fourHundred + 'seventy';
    case 471:
      return fourHundred + 'seventy ' + 'one';
    case 472:
      return fourHundred + 'seventy ' + 'two';
    case 473:
      return fourHundred + 'seventy ' + 'three';
    case 474:
      return fourHundred + 'seventy ' + 'four';
    case 475:
      return fourHundred + 'seventy ' + 'five';
    case 476:
      return fourHundred + 'seventy ' + 'six';
    case 477:
      return fourHundred + 'seventy ' + 'seven';
    case 478:
      return fourHundred + 'seventy ' + 'eight';
    case 479:
      return fourHundred + 'seventy ' + 'nine';
    case 480:
      return fourHundred + 'eighty';
    case 481:
      return fourHundred + 'eighty ' + 'one';
    case 482:
      return fourHundred + 'eighty ' + 'two';
    case 483:
      return fourHundred + 'eighty ' + 'three';
    case 484:
      return fourHundred + 'eighty ' + 'four';
    case 485:
      return fourHundred + 'eighty ' + 'five';
    case 486:
      return fourHundred + 'eighty ' + 'six';
    case 487:
      return fourHundred + 'eighty ' + 'seven';
    case 488:
      return fourHundred + 'eighty ' + 'eight';
    case 489:
      return fourHundred + 'eighty ' + 'nine';
    case 490:
      return fourHundred + 'ninety';
    case 491:
      return fourHundred + 'ninety ' + 'one';
    case 492:
      return fourHundred + 'ninety ' + 'two';
    case 493:
      return fourHundred + 'ninety ' + 'three';
    case 494:
      return fourHundred + 'ninety ' + 'four';
    case 495:
      return fourHundred + 'ninety ' + 'five';
    case 496:
      return fourHundred + 'ninety ' + 'six';
    case 497:
      return fourHundred + 'ninety ' + 'seven';
    case 498:
      return fourHundred + 'ninety ' + 'eight';
    case 499:
      return fourHundred + 'ninety ' + 'nine';    

    /* *********************Five hundred************************  */

    case 500:
      return 'five hundred';
    case 501:
      return fiveHundred + one;
    case 502:
      return fiveHundred + two;
    case 503:
      return fiveHundred + three;
    case 504:
      return fiveHundred + four;
    case 505:
      return fiveHundred + five;
    case 506:
      return fiveHundred + six;
    case 507:
      return fiveHundred + seven;
    case 508:
      return fiveHundred + eight;
    case 509:
      return fiveHundred + nine;
    case 510:
      return fiveHundred + ten;
    case 511:
      return fiveHundred + eleven; 
    case 512:
      return fiveHundred + twelve; 
    case 513:
      return fiveHundred + thirteen;
    case 514:
      return fiveHundred + fourteen;
    case 515:
      return fiveHundred + fifteen;
    case 516:
      return fiveHundred + sixteen;
    case 517:
      return fiveHundred + seventeen;
    case 518:
      return fiveHundred + eighteen;
    case 519:
      return fiveHundred + nineteen;
    case 520:
      return fiveHundred + 'twenty';
    case 521:
      return fiveHundred + 'twenty ' + 'one';
    case 522:
      return fiveHundred + 'twenty ' + 'two';
    case 523:
      return fiveHundred + 'twenty ' + 'three';
    case 524:
      return fiveHundred + 'twenty ' + 'four';
    case 525:
      return fiveHundred + 'twenty ' + 'five';
    case 526:
      return fiveHundred + 'twenty ' + 'six';
    case 527:
      return fiveHundred + 'twenty ' + 'seven';
    case 528:
      return fiveHundred + 'twenty ' + 'eight';
    case 529:
      return fiveHundred + 'twenty ' + 'nine';
    case 530:
      return fiveHundred + 'thirty';
    case 531:
      return fiveHundred + 'thirty ' + 'one';
    case 532:
      return fiveHundred + 'thirty ' + 'two';
    case 533:
      return fiveHundred + 'thirty ' + 'three';
    case 534:
      return fiveHundred + 'thirty ' + 'four';
    case 535:
      return fiveHundred + 'thirty ' + 'five';
    case 536:
      return fiveHundred + 'thirty ' + 'six';
    case 537:
      return fiveHundred + 'thirty ' + 'seven';
    case 538:
      return fiveHundred + 'thirty ' + 'eight';
    case 539:
      return fiveHundred + 'thirty ' + 'nine';
    case 540:
      return fiveHundred + 'forty';
    case 541:
      return fiveHundred + 'forty '  + 'one';
    case 542:
      return fiveHundred + 'forty '  + 'two';
    case 543:
      return fiveHundred + 'forty '  + 'three';
    case 544:
      return fiveHundred + 'forty '  + 'four';
    case 545:
      return fiveHundred + 'forty '  + 'five';
    case 546:
      return fiveHundred + 'forty '  + 'six';
    case 547:
      return fiveHundred + 'forty '  + 'seven';
    case 548:
      return fiveHundred + 'forty '  + 'eight';
    case 549:
      return fiveHundred + 'forty '  + 'nine';
    case 550:
      return fiveHundred + 'fifty';
    case 551:
      return fiveHundred + 'fifty '  + 'one';
    case 552:
      return fiveHundred + 'fifty '  + 'two';
    case 553:
      return fiveHundred + 'fifty '  + 'three';
    case 554:
      return fiveHundred + 'fifty '  + 'four';
    case 555:
      return fiveHundred + 'fifty '  + 'five';
    case 556:
      return fiveHundred + 'fifty '  + 'six';
    case 557:
      return fiveHundred + 'fifty '  + 'seven';
    case 558:
      return fiveHundred + 'fifty '  + 'eight';
    case 559:
      return fiveHundred + 'fifty '  + 'nine';
    case 560:
      return fiveHundred + 'sixty' ;
    case 561:
      return fiveHundred + 'sixty '  + 'one';
    case 562:
      return fiveHundred + 'sixty '  + 'two';
    case 563:
      return fiveHundred + 'sixty '  + 'three';
    case 564:
      return fiveHundred + 'sixty '  + 'four';
    case 565:
      return fiveHundred + 'sixty '  + 'five';
    case 566:
      return fiveHundred + 'sixty '  + 'six';
    case 567:
      return fiveHundred + 'sixty '  + 'seven';
    case 568:
      return fiveHundred + 'sixty '  + 'eight';
    case 569:
      return fiveHundred + 'sixty '  + 'nine';
    case 570:
      return fiveHundred + 'seventy';
    case 571:
      return fiveHundred + 'seventy ' + 'one';
    case 572:
      return fiveHundred + 'seventy ' + 'two';
    case 573:
      return fiveHundred + 'seventy ' + 'three';
    case 574:
      return fiveHundred + 'seventy ' + 'four';
    case 575:
      return fiveHundred + 'seventy ' + 'five';
    case 576:
      return fiveHundred + 'seventy ' + 'six';
    case 577:
      return fiveHundred + 'seventy ' + 'seven';
    case 578:
      return fiveHundred + 'seventy ' + 'eight';
    case 579:
      return fiveHundred + 'seventy ' + 'nine';
    case 580:
      return fiveHundred + 'eighty';
    case 581:
      return fiveHundred + 'eighty ' + 'one';
    case 582:
      return fiveHundred + 'eighty ' + 'two';
    case 583:
      return fiveHundred + 'eighty ' + 'three';
    case 584:
      return fiveHundred + 'eighty ' + 'four';
    case 585:
      return fiveHundred + 'eighty ' + 'five';
    case 586:
      return fiveHundred + 'eighty ' + 'six';
    case 587:
      return fiveHundred + 'eighty ' + 'seven';
    case 588:
      return fiveHundred + 'eighty ' + 'eight';
    case 589:
      return fiveHundred + 'eighty ' + 'nine';
    case 590:
      return fiveHundred + 'ninety';
    case 591:
      return fiveHundred + 'ninety ' + 'one';
    case 592:
      return fiveHundred + 'ninety ' + 'two';
    case 593:
      return fiveHundred + 'ninety ' + 'three';
    case 594:
      return fiveHundred + 'ninety ' + 'four';
    case 595:
      return fiveHundred + 'ninety ' + 'five';
    case 596:
      return fiveHundred + 'ninety ' + 'six';
    case 597:
      return fiveHundred + 'ninety ' + 'seven';
    case 598:
      return fiveHundred + 'ninety ' + 'eight';
    case 599:
      return fiveHundred + 'ninety ' + 'nine';  

    /* *********************Six hundred************************  */

    case 600:
      return 'six hundred';
    case 601:
      return sixHundred + one;
    case 602:
      return sixHundred + two;
    case 603:
      return sixHundred + three;
    case 604:
      return sixHundred + four;
    case 605:
      return sixHundred + five;
    case 606:
      return sixHundred + six;
    case 607:
      return sixHundred + seven;
    case 608:
      return sixHundred + eight;
    case 609:
      return sixHundred + nine;
    case 610:
      return sixHundred + ten;
    case 611:
      return sixHundred + eleven; 
    case 612:
      return sixHundred + twelve; 
    case 613:
      return sixHundred + thirteen;
    case 614:
      return sixHundred + fourteen;
    case 615:
      return sixHundred + fifteen;
    case 616:
      return sixHundred + sixteen;
    case 617:
      return sixHundred + seventeen;
    case 618:
      return sixHundred + eighteen;
    case 619:
      return sixHundred + nineteen;
    case 620:
      return sixHundred + 'twenty';
    case 621:
      return sixHundred + 'twenty ' + 'one';
    case 622:
      return sixHundred + 'twenty ' + 'two';
    case 623:
      return sixHundred + 'twenty ' + 'three';
    case 624:
      return sixHundred + 'twenty ' + 'four';
    case 625:
      return sixHundred + 'twenty ' + 'five';
    case 626:
      return sixHundred + 'twenty ' + 'six';
    case 627:
      return sixHundred + 'twenty ' + 'seven';
    case 628:
      return sixHundred + 'twenty ' + 'eight';
    case 629:
      return sixHundred + 'twenty ' + 'nine';
    case 630:
      return sixHundred + 'thirty';
    case 631:
      return sixHundred + 'thirty ' + 'one';
    case 632:
      return sixHundred + 'thirty ' + 'two';
    case 633:
      return sixHundred + 'thirty ' + 'three';
    case 634:
      return sixHundred + 'thirty ' + 'four';
    case 635:
      return sixHundred + 'thirty ' + 'five';
    case 636:
      return sixHundred + 'thirty ' + 'six';
    case 637:
      return sixHundred + 'thirty ' + 'seven';
    case 638:
      return sixHundred + 'thirty ' + 'eight';
    case 639:
      return sixHundred + 'thirty ' + 'nine';
    case 640:
      return sixHundred + 'forty';
    case 641:
      return sixHundred + 'forty '  + 'one';
    case 642:
      return sixHundred + 'forty '  + 'two';
    case 643:
      return sixHundred + 'forty '  + 'three';
    case 644:
      return sixHundred + 'forty '  + 'four';
    case 645:
      return sixHundred + 'forty '  + 'five';
    case 646:
      return sixHundred + 'forty '  + 'six';
    case 647:
      return sixHundred + 'forty '  + 'seven';
    case 648:
      return sixHundred + 'forty '  + 'eight';
    case 649:
      return sixHundred + 'forty '  + 'nine';
    case 650:
      return sixHundred + 'fifty';
    case 651:
      return sixHundred + 'fifty '  + 'one';
    case 652:
      return sixHundred + 'fifty '  + 'two';
    case 653:
      return sixHundred + 'fifty '  + 'three';
    case 654:
      return sixHundred + 'fifty '  + 'four';
    case 655:
      return sixHundred + 'fifty '  + 'five';
    case 656:
      return sixHundred + 'fifty '  + 'six';
    case 657:
      return sixHundred + 'fifty '  + 'seven';
    case 658:
      return sixHundred + 'fifty '  + 'eight';
    case 659:
      return sixHundred + 'fifty '  + 'nine';
    case 660:
      return sixHundred + 'sixty' ;
    case 661:
      return sixHundred + 'sixty '  + 'one';
    case 662:
      return sixHundred + 'sixty '  + 'two';
    case 663:
      return sixHundred + 'sixty '  + 'three';
    case 664:
      return sixHundred + 'sixty '  + 'four';
    case 665:
      return sixHundred + 'sixty '  + 'five';
    case 666:
      return sixHundred + 'sixty '  + 'six';
    case 667:
      return sixHundred + 'sixty '  + 'seven';
    case 668:
      return sixHundred + 'sixty '  + 'eight';
    case 669:
      return sixHundred + 'sixty '  + 'nine';
    case 670:
      return sixHundred + 'seventy';
    case 671:
      return sixHundred + 'seventy ' + 'one';
    case 672:
      return sixHundred + 'seventy ' + 'two';
    case 673:
      return sixHundred + 'seventy ' + 'three';
    case 674:
      return sixHundred + 'seventy ' + 'four';
    case 675:
      return sixHundred + 'seventy ' + 'five';
    case 676:
      return sixHundred + 'seventy ' + 'six';
    case 677:
      return sixHundred + 'seventy ' + 'seven';
    case 678:
      return sixHundred + 'seventy ' + 'eight';
    case 679:
      return sixHundred + 'seventy ' + 'nine';
    case 680:
      return sixHundred + 'eighty';
    case 681:
      return sixHundred + 'eighty ' + 'one';
    case 682:
      return sixHundred + 'eighty ' + 'two';
    case 683:
      return sixHundred + 'eighty ' + 'three';
    case 684:
      return sixHundred + 'eighty ' + 'four';
    case 685:
      return sixHundred + 'eighty ' + 'five';
    case 686:
      return sixHundred + 'eighty ' + 'six';
    case 687:
      return sixHundred + 'eighty ' + 'seven';
    case 688:
      return sixHundred + 'eighty ' + 'eight';
    case 689:
      return sixHundred + 'eighty ' + 'nine';
    case 690:
      return sixHundred + 'ninety';
    case 691:
      return sixHundred + 'ninety ' + 'one';
    case 692:
      return sixHundred + 'ninety ' + 'two';
    case 693:
      return sixHundred + 'ninety ' + 'three';
    case 694:
      return sixHundred + 'ninety ' + 'four';
    case 695:
      return sixHundred + 'ninety ' + 'five';
    case 696:
      return sixHundred + 'ninety ' + 'six';
    case 697:
      return sixHundred + 'ninety ' + 'seven';
    case 698:
      return sixHundred + 'ninety ' + 'eight';
    case 699:
      return sixHundred + 'ninety ' + 'nine';  

    /* *********************Seven hundred************************  */

    case 700:
      return 'seven hundred';
    case 701:
      return sevenHundred + one;
    case 702:
      return sevenHundred + two;
    case 703:
      return sevenHundred + three;
    case 704:
      return sevenHundred + four;
    case 705:
      return sevenHundred + five;
    case 706:
      return sevenHundred + six;
    case 707:
      return sevenHundred + seven;
    case 708:
      return sevenHundred + eight;
    case 709:
      return sevenHundred + nine;
    case 710:
      return sevenHundred + ten;
    case 711:
      return sevenHundred + eleven; 
    case 712:
      return sevenHundred + twelve; 
    case 713:
      return sevenHundred + thirteen;
    case 714:
      return sevenHundred + fourteen;
    case 715:
      return sevenHundred + fifteen;
    case 716:
      return sevenHundred + sixteen;
    case 717:
      return sevenHundred + seventeen;
    case 718:
      return sevenHundred + eighteen;
    case 719:
      return sevenHundred + nineteen;
    case 720:
      return sevenHundred + 'twenty';
    case 721:
      return sevenHundred + 'twenty ' + 'one';
    case 722:
      return sevenHundred + 'twenty ' + 'two';
    case 723:
      return sevenHundred + 'twenty ' + 'three';
    case 724:
      return sevenHundred + 'twenty ' + 'four';
    case 725:
      return sevenHundred + 'twenty ' + 'five';
    case 726:
      return sevenHundred + 'twenty ' + 'six';
    case 727:
      return sevenHundred + 'twenty ' + 'seven';
    case 728:
      return sevenHundred + 'twenty ' + 'eight';
    case 729:
      return sevenHundred + 'twenty ' + 'nine';
    case 730:
      return sevenHundred + 'thirty';
    case 731:
      return sevenHundred + 'thirty ' + 'one';
    case 732:
      return sevenHundred + 'thirty ' + 'two';
    case 733:
      return sevenHundred + 'thirty ' + 'three';
    case 734:
      return sevenHundred + 'thirty ' + 'four';
    case 735:
      return sevenHundred + 'thirty ' + 'five';
    case 736:
      return sevenHundred + 'thirty ' + 'six';
    case 737:
      return sevenHundred + 'thirty ' + 'seven';
    case 738:
      return sevenHundred + 'thirty ' + 'eight';
    case 739:
      return sevenHundred + 'thirty ' + 'nine';
    case 740:
      return sevenHundred + 'forty';
    case 741:
      return sevenHundred + 'forty '  + 'one';
    case 742:
      return sevenHundred + 'forty '  + 'two';
    case 743:
      return sevenHundred + 'forty '  + 'three';
    case 744:
      return sevenHundred + 'forty '  + 'four';
    case 745:
      return sevenHundred + 'forty '  + 'five';
    case 746:
      return sevenHundred + 'forty '  + 'six';
    case 747:
      return sevenHundred + 'forty '  + 'seven';
    case 748:
      return sevenHundred + 'forty '  + 'eight';
    case 749:
      return sevenHundred + 'forty '  + 'nine';
    case 750:
      return sevenHundred + 'fifty';
    case 751:
      return sevenHundred + 'fifty '  + 'one';
    case 752:
      return sevenHundred + 'fifty '  + 'two';
    case 753:
      return sevenHundred + 'fifty '  + 'three';
    case 754:
      return sevenHundred + 'fifty '  + 'four';
    case 755:
      return sevenHundred + 'fifty '  + 'five';
    case 756:
      return sevenHundred + 'fifty '  + 'six';
    case 757:
      return sevenHundred + 'fifty '  + 'seven';
    case 758:
      return sevenHundred + 'fifty '  + 'eight';
    case 759:
      return sevenHundred + 'fifty '  + 'nine';
    case 760:
      return sevenHundred + 'sixty' ;
    case 761:
      return sevenHundred + 'sixty '  + 'one';
    case 762:
      return sevenHundred + 'sixty '  + 'two';
    case 763:
      return sevenHundred + 'sixty '  + 'three';
    case 764:
      return sevenHundred + 'sixty '  + 'four';
    case 765:
      return sevenHundred + 'sixty '  + 'five';
    case 766:
      return sevenHundred + 'sixty '  + 'six';
    case 767:
      return sevenHundred + 'sixty '  + 'seven';
    case 768:
      return sevenHundred + 'sixty '  + 'eight';
    case 769:
      return sevenHundred + 'sixty '  + 'nine';
    case 770:
      return sevenHundred + 'seventy';
    case 771:
      return sevenHundred + 'seventy ' + 'one';
    case 772:
      return sevenHundred + 'seventy ' + 'two';
    case 773:
      return sevenHundred + 'seventy ' + 'three';
    case 774:
      return sevenHundred + 'seventy ' + 'four';
    case 775:
      return sevenHundred + 'seventy ' + 'five';
    case 776:
      return sevenHundred + 'seventy ' + 'six';
    case 777:
      return sevenHundred + 'seventy ' + 'seven';
    case 778:
      return sevenHundred + 'seventy ' + 'eight';
    case 779:
      return sevenHundred + 'seventy ' + 'nine';
    case 780:
      return sevenHundred + 'eighty';
    case 781:
      return sevenHundred + 'eighty ' + 'one';
    case 782:
      return sevenHundred + 'eighty ' + 'two';
    case 783:
      return sevenHundred + 'eighty ' + 'three';
    case 784:
      return sevenHundred + 'eighty ' + 'four';
    case 785:
      return sevenHundred + 'eighty ' + 'five';
    case 786:
      return sevenHundred + 'eighty ' + 'six';
    case 787:
      return sevenHundred + 'eighty ' + 'seven';
    case 788:
      return sevenHundred + 'eighty ' + 'eight';
    case 789:
      return sevenHundred + 'eighty ' + 'nine';
    case 790:
      return sevenHundred + 'ninety';
    case 791:
      return sevenHundred + 'ninety ' + 'one';
    case 792:
      return sevenHundred + 'ninety ' + 'two';
    case 793:
      return sevenHundred + 'ninety ' + 'three';
    case 794:
      return sevenHundred + 'ninety ' + 'four';
    case 795:
      return sevenHundred + 'ninety ' + 'five';
    case 796:
      return sevenHundred + 'ninety ' + 'six';
    case 797:
      return sevenHundred + 'ninety ' + 'seven';
    case 798:
      return sevenHundred + 'ninety ' + 'eight';
    case 799:
      return sevenHundred + 'ninety ' + 'nine';  

    /* *********************Eight hundred************************  */

    case 800:
      return 'eight hundred';
    case 801:
      return eightHundred + one;
    case 802:
      return eightHundred + two;
    case 803:
      return eightHundred + three;
    case 804:
      return eightHundred + four;
    case 805:
      return eightHundred + five;
    case 806:
      return eightHundred + six;
    case 807:
      return eightHundred + seven;
    case 808:
      return eightHundred + eight;
    case 809:
      return eightHundred + nine;
    case 810:
      return eightHundred + ten;
    case 811:
      return eightHundred + eleven; 
    case 812:
      return eightHundred + twelve; 
    case 813:
      return eightHundred + thirteen;
    case 814:
      return eightHundred + fourteen;
    case 815:
      return eightHundred + fifteen;
    case 816:
      return eightHundred + sixteen;
    case 817:
      return eightHundred + seventeen;
    case 818:
      return eightHundred + eighteen;
    case 819:
      return eightHundred + nineteen;
    case 820:
      return eightHundred + 'twenty';
    case 821:
      return eightHundred + 'twenty ' + 'one';
    case 822:
      return eightHundred + 'twenty ' + 'two';
    case 823:
      return eightHundred + 'twenty ' + 'three';
    case 824:
      return eightHundred + 'twenty ' + 'four';
    case 825:
      return eightHundred + 'twenty ' + 'five';
    case 826:
      return eightHundred + 'twenty ' + 'six';
    case 827:
      return eightHundred + 'twenty ' + 'seven';
    case 828:
      return eightHundred + 'twenty ' + 'eight';
    case 829:
      return eightHundred + 'twenty ' + 'nine';
    case 830:
      return eightHundred + 'thirty';
    case 831:
      return eightHundred + 'thirty ' + 'one';
    case 832:
      return eightHundred + 'thirty ' + 'two';
    case 833:
      return eightHundred + 'thirty ' + 'three';
    case 834:
      return eightHundred + 'thirty ' + 'four';
    case 835:
      return eightHundred + 'thirty ' + 'five';
    case 836:
      return eightHundred + 'thirty ' + 'six';
    case 837:
      return eightHundred + 'thirty ' + 'seven';
    case 838:
      return eightHundred + 'thirty ' + 'eight';
    case 839:
      return eightHundred + 'thirty ' + 'nine';
    case 840:
      return eightHundred + 'forty';
    case 841:
      return eightHundred + 'forty '  + 'one';
    case 842:
      return eightHundred + 'forty '  + 'two';
    case 843:
      return eightHundred + 'forty '  + 'three';
    case 844:
      return eightHundred + 'forty '  + 'four';
    case 845:
      return eightHundred + 'forty '  + 'five';
    case 846:
      return eightHundred + 'forty '  + 'six';
    case 847:
      return eightHundred + 'forty '  + 'seven';
    case 848:
      return eightHundred + 'forty '  + 'eight';
    case 849:
      return eightHundred + 'forty '  + 'nine';
    case 850:
      return eightHundred + 'fifty';
    case 851:
      return eightHundred + 'fifty '  + 'one';
    case 852:
      return eightHundred + 'fifty '  + 'two';
    case 853:
      return eightHundred + 'fifty '  + 'three';
    case 854:
      return eightHundred + 'fifty '  + 'four';
    case 855:
      return eightHundred + 'fifty '  + 'five';
    case 856:
      return eightHundred + 'fifty '  + 'six';
    case 857:
      return eightHundred + 'fifty '  + 'seven';
    case 858:
      return eightHundred + 'fifty '  + 'eight';
    case 859:
      return eightHundred + 'fifty '  + 'nine';
    case 860:
      return eightHundred + 'sixty' ;
    case 861:
      return eightHundred + 'sixty '  + 'one';
    case 862:
      return eightHundred + 'sixty '  + 'two';
    case 863:
      return eightHundred + 'sixty '  + 'three';
    case 864:
      return eightHundred + 'sixty '  + 'four';
    case 865:
      return eightHundred + 'sixty '  + 'five';
    case 866:
      return eightHundred + 'sixty '  + 'six';
    case 867:
      return eightHundred + 'sixty '  + 'seven';
    case 868:
      return eightHundred + 'sixty '  + 'eight';
    case 869:
      return eightHundred + 'sixty '  + 'nine';
    case 870:
      return eightHundred + 'seventy';
    case 871:
      return eightHundred + 'seventy ' + 'one';
    case 872:
      return eightHundred + 'seventy ' + 'two';
    case 873:
      return eightHundred + 'seventy ' + 'three';
    case 874:
      return eightHundred + 'seventy ' + 'four';
    case 875:
      return eightHundred + 'seventy ' + 'five';
    case 876:
      return eightHundred + 'seventy ' + 'six';
    case 877:
      return eightHundred + 'seventy ' + 'seven';
    case 878:
      return eightHundred + 'seventy ' + 'eight';
    case 879:
      return eightHundred + 'seventy ' + 'nine';
    case 880:
      return eightHundred + 'eighty';
    case 881:
      return eightHundred + 'eighty ' + 'one';
    case 882:
      return eightHundred + 'eighty ' + 'two';
    case 883:
      return eightHundred + 'eighty ' + 'three';
    case 884:
      return eightHundred + 'eighty ' + 'four';
    case 885:
      return eightHundred + 'eighty ' + 'five';
    case 886:
      return eightHundred + 'eighty ' + 'six';
    case 887:
      return eightHundred + 'eighty ' + 'seven';
    case 888:
      return eightHundred + 'eighty ' + 'eight';
    case 889:
      return eightHundred + 'eighty ' + 'nine';
    case 890:
      return eightHundred + 'ninety';
    case 891:
      return eightHundred + 'ninety ' + 'one';
    case 892:
      return eightHundred + 'ninety ' + 'two';
    case 893:
      return eightHundred + 'ninety ' + 'three';
    case 894:
      return eightHundred + 'ninety ' + 'four';
    case 895:
      return eightHundred + 'ninety ' + 'five';
    case 896:
      return eightHundred + 'ninety ' + 'six';
    case 897:
      return eightHundred + 'ninety ' + 'seven';
    case 898:
      return eightHundred + 'ninety ' + 'eight';
    case 899:
      return eightHundred + 'ninety ' + 'nine';  

    /* *********************Three hundred************************  */

    case 900:
      return 'nine hundred';
    case 901:
      return nineHundred + one;
    case 902:
      return nineHundred + two;
    case 903:
      return nineHundred + three;
    case 904:
      return nineHundred + four;
    case 905:
      return nineHundred + five;
    case 906:
      return nineHundred + six;
    case 907:
      return nineHundred + seven;
    case 908:
      return nineHundred + eight;
    case 909:
      return nineHundred + nine;
    case 910:
      return nineHundred + ten;
    case 911:
      return nineHundred + eleven; 
    case 912:
      return nineHundred + twelve; 
    case 913:
      return nineHundred + thirteen;
    case 914:
      return nineHundred + fourteen;
    case 915:
      return nineHundred + fifteen;
    case 916:
      return nineHundred + sixteen;
    case 917:
      return nineHundred + seventeen;
    case 918:
      return nineHundred + eighteen;
    case 919:
      return nineHundred + nineteen;
    case 920:
      return nineHundred + 'twenty';
    case 921:
      return nineHundred + 'twenty ' + 'one';
    case 922:
      return nineHundred + 'twenty ' + 'two';
    case 923:
      return nineHundred + 'twenty ' + 'three';
    case 924:
      return nineHundred + 'twenty ' + 'four';
    case 925:
      return nineHundred + 'twenty ' + 'five';
    case 926:
      return nineHundred + 'twenty ' + 'six';
    case 927:
      return nineHundred + 'twenty ' + 'seven';
    case 928:
      return nineHundred + 'twenty ' + 'eight';
    case 929:
      return nineHundred + 'twenty ' + 'nine';
    case 930:
      return nineHundred + 'thirty';
    case 931:
      return nineHundred + 'thirty ' + 'one';
    case 932:
      return nineHundred + 'thirty ' + 'two';
    case 933:
      return nineHundred + 'thirty ' + 'three';
    case 934:
      return nineHundred + 'thirty ' + 'four';
    case 935:
      return nineHundred + 'thirty ' + 'five';
    case 936:
      return nineHundred + 'thirty ' + 'six';
    case 937:
      return nineHundred + 'thirty ' + 'seven';
    case 938:
      return nineHundred + 'thirty ' + 'eight';
    case 939:
      return nineHundred + 'thirty ' + 'nine';
    case 940:
      return nineHundred + 'forty';
    case 941:
      return nineHundred + 'forty '  + 'one';
    case 942:
      return nineHundred + 'forty '  + 'two';
    case 943:
      return nineHundred + 'forty '  + 'three';
    case 944:
      return nineHundred + 'forty '  + 'four';
    case 945:
      return nineHundred + 'forty '  + 'five';
    case 946:
      return nineHundred + 'forty '  + 'six';
    case 947:
      return nineHundred + 'forty '  + 'seven';
    case 948:
      return nineHundred + 'forty '  + 'eight';
    case 949:
      return nineHundred + 'forty '  + 'nine';
    case 950:
      return nineHundred + 'fifty';
    case 951:
      return nineHundred + 'fifty '  + 'one';
    case 952:
      return nineHundred + 'fifty '  + 'two';
    case 953:
      return nineHundred + 'fifty '  + 'three';
    case 954:
      return nineHundred + 'fifty '  + 'four';
    case 955:
      return nineHundred + 'fifty '  + 'five';
    case 956:
      return nineHundred + 'fifty '  + 'six';
    case 957:
      return nineHundred + 'fifty '  + 'seven';
    case 958:
      return nineHundred + 'fifty '  + 'eight';
    case 959:
      return nineHundred + 'fifty '  + 'nine';
    case 960:
      return nineHundred + 'sixty' ;
    case 961:
      return nineHundred + 'sixty '  + 'one';
    case 962:
      return nineHundred + 'sixty '  + 'two';
    case 963:
      return nineHundred + 'sixty '  + 'three';
    case 964:
      return nineHundred + 'sixty '  + 'four';
    case 965:
      return nineHundred + 'sixty '  + 'five';
    case 966:
      return nineHundred + 'sixty '  + 'six';
    case 967:
      return nineHundred + 'sixty '  + 'seven';
    case 968:
      return nineHundred + 'sixty '  + 'eight';
    case 969:
      return nineHundred + 'sixty '  + 'nine';
    case 970:
      return nineHundred + 'seventy';
    case 971:
      return nineHundred + 'seventy ' + 'one';
    case 972:
      return nineHundred + 'seventy ' + 'two';
    case 973:
      return nineHundred + 'seventy ' + 'three';
    case 974:
      return nineHundred + 'seventy ' + 'four';
    case 975:
      return nineHundred + 'seventy ' + 'five';
    case 976:
      return nineHundred + 'seventy ' + 'six';
    case 977:
      return nineHundred + 'seventy ' + 'seven';
    case 978:
      return nineHundred + 'seventy ' + 'eight';
    case 979:
      return nineHundred + 'seventy ' + 'nine';
    case 980:
      return nineHundred + 'eighty';
    case 981:
      return nineHundred + 'eighty ' + 'one';
    case 982:
      return nineHundred + 'eighty ' + 'two';
    case 983:
      return nineHundred + 'eighty ' + 'three';
    case 984:
      return nineHundred + 'eighty ' + 'four';
    case 985:
      return nineHundred + 'eighty ' + 'five';
    case 986:
      return nineHundred + 'eighty ' + 'six';
    case 987:
      return nineHundred + 'eighty ' + 'seven';
    case 988:
      return nineHundred + 'eighty ' + 'eight';
    case 989:
      return nineHundred + 'eighty ' + 'nine';
    case 990:
      return nineHundred + 'ninety';
    case 991:
      return nineHundred + 'ninety ' + 'one';
    case 992:
      return nineHundred + 'ninety ' + 'two';
    case 993:
      return nineHundred + 'ninety ' + 'three';
    case 994:
      return nineHundred + 'ninety ' + 'four';
    case 995:
      return nineHundred + 'ninety ' + 'five';
    case 996:
      return nineHundred + 'ninety ' + 'six';
    case 997:
      return nineHundred + 'ninety ' + 'seven';
    case 998:
      return nineHundred + 'ninety ' + 'eight';
    case 999:
      return nineHundred + 'ninety ' + 'nine';  

  }
}