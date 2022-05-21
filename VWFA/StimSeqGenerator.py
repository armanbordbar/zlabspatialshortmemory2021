import os
import sys
import numpy as np
from numpy.random import seed
from numpy.random import randint
try: 
  import simplejson as json
except:
  import json

pwd = os.getcwd()
STIM_DIR = pwd + '/VWFA/ExpMain/stimuli'
IMAGES_PER_BLOCK = 24
NUM_BLOCKS = 16
cb = [1,2,3,4,4,3,2,1,2,4,3,1,1,3,4,2]
REPEATS = 2
dur = {
    'stim': 0.500,
    'fix_t': 0.1923,
    'breakScreen': 1.500,
    'blockTime': 18
}
dur['big_fix_t']  = dur['stim'] + dur['fix_t']

bgColors = np.array([
    [226, 179, 180],
    [204, 195, 144],
    [168, 210, 115],
    [115, 217, 147],
    [117, 216, 189],
    [167, 198, 205],
    [205, 179, 213],
    [228, 173, 207]])

orders = np.array([
    ['word_pngs_grid','scr_word_pngs_grid','line_pngs_grid','face_pngs_grid'],
    ['scr_word_pngs_grid','line_pngs_grid','face_pngs_grid','word_pngs_grid'],
    ['line_pngs_grid','face_pngs_grid','word_pngs_grid','scr_word_pngs_grid'],
    ['face_pngs_grid','word_pngs_grid','scr_word_pngs_grid','line_pngs_grid'],
    ['word_pngs_grid','face_pngs_grid','line_pngs_grid','scr_word_pngs_grid'],
    ['line_pngs_grid','scr_word_pngs_grid','face_pngs_grid','word_pngs_grid']
    ])

order_codes = [
    [1,2,3,4],
    [2,3,4,1],
    [3,4,1,2],
    [4,1,2,3],
    [1,4,3,2],
    [3,2,4,1]
    ]

def randomizeCondOrder(condition) :
    seed(1)
    cond_list = []
    cond_dir = STIM_DIR + '/' + condition
    cond_file_list = os.listdir(cond_dir)
    cond_order = np.random.permutation(len(cond_file_list))
    for i in cond_order:
        cond_list.append(cond_dir + '/' + cond_file_list[cond_order[i]])
    return cond_list
order = randint(0,5)
a_list = randomizeCondOrder(orders[order][0])
b_list = randomizeCondOrder(orders[order][1])
c_list = randomizeCondOrder(orders[order][2])
d_list = randomizeCondOrder(orders[order][3])

imageList = []
repetitions = []
condition_list = []
colorList = []
background_color = []
def nonRepeatingRand(top,count):
    diff = randint(0, top, (count,1))
    result = (np.cumsum(diff) + randint(0,1,(count,1)) - 1) % top + 1
    return result

for i in range(150):
    for idxColor in range(len(bgColors)):
       colorList.append(bgColors[idxColor].tolist())
        


for idxBlock in range(len(cb)):
    if cb[idxBlock] == 1:
        reps = nonRepeatingRand(IMAGES_PER_BLOCK,REPEATS)
        blockImages = []
        for idxImage in range(IMAGES_PER_BLOCK):
            blockImages.append(a_list[idxImage])
            repetitions.append(0)
            background_color.append(colorList[idxImage])
            condition_list.append(order_codes[0][1])
            if idxImage in reps:
                blockImages.append(a_list[idxImage])
                repetitions.append(1)
                background_color.append(colorList[idxImage])
                condition_list.append(order_codes[0][1])
        
        imageList.append(blockImages)
    elif cb[idxBlock] == 2:
        reps = nonRepeatingRand(IMAGES_PER_BLOCK,REPEATS)
        blockImages = []
        for idxImage in range(IMAGES_PER_BLOCK):
            blockImages.append(b_list[idxImage])
            repetitions.append(0)
            background_color.append(colorList[idxImage])
            background_color.append(colorList[idxBlock])
            condition_list.append(order_codes[0][2])
            if idxImage in reps:
                blockImages.append(b_list[idxImage])
                repetitions.append(1)
                background_color.append(colorList[idxImage])
                condition_list.append(order_codes[0][2])
        imageList.append(blockImages)
    elif cb[idxBlock] == 3:
        reps = nonRepeatingRand(IMAGES_PER_BLOCK,REPEATS)
        blockImages = []
        for idxImage in range(IMAGES_PER_BLOCK):
            blockImages.append(c_list[idxImage])
            repetitions.append(0)
            background_color.append(colorList[idxImage])
            condition_list.append(order_codes[0][3])
            if idxImage in reps:
                blockImages.append(c_list[idxImage])
                repetitions.append(1)
                background_color.append(colorList[idxImage])
                condition_list.append(order_codes[0][3])
        imageList.append(blockImages) 
    elif cb[idxBlock] == 4:
        reps = nonRepeatingRand(IMAGES_PER_BLOCK,REPEATS)
        blockImages = []
        for idxImage in range(IMAGES_PER_BLOCK):
            blockImages.append(d_list[idxImage])
            repetitions.append(0)
            background_color.append(colorList[idxImage])
            condition_list.append(order_codes[0][3])
            if idxImage in reps:
                blockImages.append(d_list[idxImage])
                repetitions.append(1)
                background_color.append(colorList[idxImage])
                condition_list.append(order_codes[0][3])
        imageList.append(blockImages)

condition_list = list(map(int, condition_list))

ExpSeqImg = imageList
ExpSeqRep = repetitions
ExpSeqCond = condition_list
ExpBgColorSeq = background_color

ExpInfo = {
    "ExpSeqImg": ExpSeqImg,
    "ExpSeqRep": ExpSeqRep,
    "ExpSeqCond": ExpSeqCond,
    "ExpColorSeq": ExpBgColorSeq
    }
ExpJsonData = json.dumps(ExpInfo)
data = json.loads(ExpJsonData)
VWFAstimSeq = json.dumps(data, ensure_ascii=False)
print(VWFAstimSeq)