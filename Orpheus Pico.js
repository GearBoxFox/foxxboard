// Raspeberry Pi Pico RP2040
// Original kiCad footprint gotten from https://github.com/HeadBoffin/RP_Silicon_KiCad
// Params
//  mounted: default is front
//    if front, the pico is to be mounted on the front of the pcb, with the logo facing outwards
//    if back, the pico is to be mounted on the back of the pcb, with the logo facing outwards
//    if both, the pico can be mounted on wither side. Only recommended if disabling throughole pins
//  mountingType: default is both
//    if both, througholes and smd pads will be added to the footprint
//    if smd, only smd pads will be added
//    if throughole, only througholes will be added
//  pinSilkscreen: default is true
//    if true, adds silkscreen for the pinouts
//    if false, no silkscreen for pinouts


module.exports = {
  params: {
    class: 'MCU',
    mounted: 'front',
    mountingType: 'both',
    pinSilkscreen: true,
	GP0: {type: 'net', value: 'GP0'},
    GP1: {type: 'net', value: 'GP1'},
    GP2: {type: 'net', value: 'GP2'},
    GP3: {type: 'net', value: 'GP3'},
    GP4: {type: 'net', value: 'GP4'},
    GP5: {type: 'net', value: 'GP5'},
    GP6: {type: 'net', value: 'GP6'},
    GP7: {type: 'net', value: 'GP7'},
    GP8: {type: 'net', value: 'GP8'},
    GP9: {type: 'net', value: 'GP9'},
    GP10: {type: 'net', value: 'GP10'},
    GP11: {type: 'net', value: 'GP11'},
    GP12: {type: 'net', value: 'GP12'},
    GP13: {type: 'net', value: 'GP13'},
    GP14: {type: 'net', value: 'GP14'},
    GP15: {type: 'net', value: 'GP15'},
    GP16: {type: 'net', value: 'GP16'},
    GP17: {type: 'net', value: 'GP17'},
    GP18: {type: 'net', value: 'GP18'},
    GP19: {type: 'net', value: 'GP19'},
    GP20: {type: 'net', value: 'GP20'},
    GP21: {type: 'net', value: 'GP21'},
    GP22: {type: 'net', value: 'GP22'},
    GP26: {type: 'net', value: 'GP26'},
    GP27: {type: 'net', value: 'GP27'},
    GP28: {type: 'net', value: 'GP28'},
    RUN: {type: 'net', value: 'RUN'},
    ADC_VREF: {type: 'net', value: 'ADC_VREF'},
    V3V3_OUT: {type: 'net', value: '3V3'},
    V3V3_EN: {type: 'net', value: '3V3_EN'},
    VSYS: {type: 'net', value: 'VSYS'},
    VBUS: {type: 'net', value: 'VBUS'},
    GND: {type: 'net', value: 'GND'},
    AGND: {type: 'net', value: 'AGND'},
    SWCLK: {type: 'net', value: 'SWCLK'},
    SWDIO: {type: 'net', value: 'SWDIO'}
  },
  body: p => {
    function standard(layer) {
      return `
        (module RPi_Pico_SMD_TH (layer F.Cu) (tedit 5F638C80)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${layer}.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value RPi_Pico_SMD_TH (at 0 2.159) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${''/* component outline ??? */}
        (fp_line (start 1.1 25.5) (end 1.5 25.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -1.5 25.5) (end -1.1 25.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 25.5) (end 3.7 25.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 15.1) (end 10.5 15.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 7.4) (end 10.5 7.8) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -18) (end 10.5 -17.6) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 12.5) (end 10.5 12.9) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -0.2) (end 10.5 0.2) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 4.9) (end 10.5 5.3) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 20.1) (end 10.5 20.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 22.7) (end 10.5 23.1) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 17.6) (end 10.5 18) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -15.4) (end 10.5 -15) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 10) (end 10.5 10.4) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 2.3) (end 10.5 2.7) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start 10.5 -10.4) (end 10.5 -10) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 22.7) (end -10.5 23.1) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 20.1) (end -10.5 20.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 17.6) (end -10.5 18) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 15.1) (end -10.5 15.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 12.5) (end -10.5 12.9) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 10) (end -10.5 10.4) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 7.4) (end -10.5 7.8) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 4.9) (end -10.5 5.3) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 2.3) (end -10.5 2.7) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -0.2) (end -10.5 0.2) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -10.4) (end -10.5 -10) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -15.4) (end -10.5 -15) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -18) (end -10.5 -17.6) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -7.493 -22.833) (end -7.493 -25.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -22.833) (end -7.493 -22.833) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -3.7 25.5) (end -10.5 25.5) (layer ${layer}.SilkS) (width 0.12))
        (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer ${layer}.SilkS) (width 0.12))

        ${''/* Other things ??? */}
        (fp_line (start -11 26) (end -11 -26) (layer F.CrtYd) (width 0.12))
        (fp_line (start 11 26) (end -11 26) (layer F.CrtYd) (width 0.12))
        (fp_line (start 11 -26) (end 11 26) (layer F.CrtYd) (width 0.12))
        (fp_line (start -11 -26) (end 11 -26) (layer F.CrtYd) (width 0.12))
        (fp_line (start -10.5 -24.2) (end -9.2 -25.5) (layer F.Fab) (width 0.12))
        (fp_line (start -10.5 25.5) (end -10.5 -25.5) (layer F.Fab) (width 0.12))
        (fp_line (start 10.5 25.5) (end -10.5 25.5) (layer F.Fab) (width 0.12))
        (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer F.Fab) (width 0.12))
        (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer F.Fab) (width 0.12))
        (fp_text user %R (at 0 0 180) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )

        ${''/* Copper keepouts */}
        (fp_poly (pts (xy -1.5 -16.5) (xy -3.5 -16.5) (xy -3.5 -18.5) (xy -1.5 -18.5)) (layer Dwgs.User) (width 0.1))
        (fp_poly (pts (xy -1.5 -14) (xy -3.5 -14) (xy -3.5 -16) (xy -1.5 -16)) (layer Dwgs.User) (width 0.1))
        (fp_poly (pts (xy -1.5 -11.5) (xy -3.5 -11.5) (xy -3.5 -13.5) (xy -1.5 -13.5)) (layer Dwgs.User) (width 0.1))
        (fp_poly (pts (xy 3.7 -20.2) (xy -3.7 -20.2) (xy -3.7 -24.9) (xy 3.7 -24.9)) (layer Dwgs.User) (width 0.1))
        (fp_text user "Copper Keepouts shown on Dwgs layer" (at 0.1 -30.2) (layer Cmts.User)
          (effects (font (size 1 1) (thickness 0.15)))
        )
      `
    }

    function pinSilkscreen(def_neg, def_pos, layer, font_effect) {
      return `
        ${''/* pin names */}
        (fp_text user GP1 (at ${def_neg}12.9 -21.6 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP2 (at ${def_neg}12.9 -16.51 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP0 (at ${def_neg}12.8 -24.13 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP3 (at ${def_neg}12.8 -13.97 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP4 (at ${def_neg}12.8 -11.43 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP5 (at ${def_neg}12.8 -8.89 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP6 (at ${def_neg}12.8 -3.81 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP7 (at ${def_neg}12.7 -1.3 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP8 (at ${def_neg}12.8 1.27 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP9 (at ${def_neg}12.8 3.81 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP10 (at ${def_neg}13.054 8.89 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP11 (at ${def_neg}13.2 11.43 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP12 (at ${def_neg}13.2 13.97 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP13 (at ${def_neg}13.054 16.51 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP14 (at ${def_neg}13.1 21.59 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP15 (at ${def_neg}13.054 24.13 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP16 (at ${def_pos}13.054 24.13 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP17 (at ${def_pos}13.054 21.59 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP18 (at ${def_pos}13.054 16.51 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP19 (at ${def_pos}13.054 13.97 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP20 (at ${def_pos}13.054 11.43 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP21 (at ${def_pos}13.054 8.9 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP22 (at ${def_pos}13.054 3.81 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user RUN (at ${def_pos}13 1.27 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP26 (at ${def_pos}13.054 -1.27 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP27 (at ${def_pos}13.054 -3.8 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GP28 (at ${def_pos}13.054 -9.144 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user ADC_VREF (at ${def_pos}14 -12.5 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user 3V3 (at ${def_pos}12.9 -13.9 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user 3V3_EN (at ${def_pos}13.7 -17.2 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user VSYS (at ${def_pos}13.2 -21.59 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user VBUS (at ${def_pos}13.3 -24.2 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_neg}12.8 -19.05 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_neg}12.8 -6.35 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_neg}12.8 6.35 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_neg}12.8 19.05 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_pos}12.8 19.05 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_pos}12.8 6.35 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at ${def_pos}12.8 -19.05 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user AGND (at ${def_pos}13.054 -6.35 ${p.rot + 45}) (layer ${layer}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user SWCLK (at ${def_neg}5.7 26.2 ${p.rot}) (layer ${layer}.SilkS)(effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user SWDIO (at ${def_pos}5.6 26.2 ${p.rot}) (layer ${layer}.SilkS)(effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
      `
    }

    function pins(def_neg, def_pos) {
      return `
        ${''/* the throughole pins */}
        (pad 1 thru_hole oval (at ${def_neg}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP0.str})
        (pad 2 thru_hole oval (at ${def_neg}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP1.str})
        (pad 3 thru_hole rect (at ${def_neg}8.89 -19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 4 thru_hole oval (at ${def_neg}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP2.str})
        (pad 5 thru_hole oval (at ${def_neg}8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP3.str})
        (pad 6 thru_hole oval (at ${def_neg}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP4.str})
        (pad 7 thru_hole oval (at ${def_neg}8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP5.str})
        (pad 8 thru_hole rect (at ${def_neg}8.89 -6.35 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 9 thru_hole oval (at ${def_neg}8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP6.str})
        (pad 10 thru_hole oval (at ${def_neg}8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP7.str})
        (pad 11 thru_hole oval (at ${def_neg}8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP8.str})
        (pad 12 thru_hole oval (at ${def_neg}8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP9.str})
        (pad 13 thru_hole rect (at ${def_neg}8.89 6.35 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 14 thru_hole oval (at ${def_neg}8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP10.str})
        (pad 15 thru_hole oval (at ${def_neg}8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP11.str})
        (pad 16 thru_hole oval (at ${def_neg}8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP12.str})
        (pad 17 thru_hole oval (at ${def_neg}8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP13.str})
        (pad 18 thru_hole rect (at ${def_neg}8.89 19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 19 thru_hole oval (at ${def_neg}8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP14.str})
        (pad 20 thru_hole oval (at ${def_neg}8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP15.str})
        (pad 21 thru_hole oval (at ${def_pos}8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP16.str})
        (pad 22 thru_hole oval (at ${def_pos}8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP17.str})
        (pad 23 thru_hole rect (at ${def_pos}8.89 19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 24 thru_hole oval (at ${def_pos}8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP18.str})
        (pad 25 thru_hole oval (at ${def_pos}8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP19.str})
        (pad 26 thru_hole oval (at ${def_pos}8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP20.str})
        (pad 27 thru_hole oval (at ${def_pos}8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP21.str})
        (pad 28 thru_hole rect (at ${def_pos}8.89 6.35  ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 29 thru_hole oval (at ${def_pos}8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP22.str})
        (pad 30 thru_hole oval (at ${def_pos}8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.RUN.str})
        (pad 31 thru_hole oval (at ${def_pos}8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP26.str})
        (pad 32 thru_hole oval (at ${def_pos}8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP27.str})
        (pad 33 thru_hole rect (at ${def_pos}8.89 -6.35  ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.AGND.str})
        (pad 34 thru_hole oval (at ${def_pos}8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP28.str})
        (pad 35 thru_hole oval (at ${def_pos}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.ADC_VREF.str})
        (pad 36 thru_hole oval (at ${def_pos}8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3V3_OUT.str})
        (pad 37 thru_hole oval (at ${def_pos}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3V3_EN.str})
        (pad 38 thru_hole rect (at ${def_pos}8.89 -19.05  ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 39 thru_hole oval (at ${def_pos}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VSYS.str})
        (pad 40 thru_hole oval (at ${def_pos}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VBUS.str})
        
        ${''/* The debug pins */}
        (pad "" np_thru_hole oval (at -2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
        (pad "" np_thru_hole oval (at 2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
        (pad "" np_thru_hole oval (at -2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        (pad "" np_thru_hole oval (at 2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        (pad 41 thru_hole oval (at -2.54 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
        (pad 42 thru_hole rect (at 0 23.9 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
        (pad 43 thru_hole oval (at 2.54 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
        `
    }

    function pads(def_neg, def_pos, layer) {
    return `
    ${''/* and now the smd pads */}
        (pad 1 smd rect (at ${def_neg}8.89 -24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP0.str})
        (pad 2 smd rect (at ${def_neg}8.89 -21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP1.str})
        (pad 3 smd rect (at ${def_neg}8.89 -19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 4 smd rect (at ${def_neg}8.89 -16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP2.str})
        (pad 5 smd rect (at ${def_neg}8.89 -13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP3.str})
        (pad 6 smd rect (at ${def_neg}8.89 -11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP4.str})
        (pad 7 smd rect (at ${def_neg}8.89 -8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP5.str})
        (pad 8 smd rect (at ${def_neg}8.89 -6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 9 smd rect (at ${def_neg}8.89 -3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP6.str})
        (pad 10 smd rect (at ${def_neg}8.89 -1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP7.str})
        (pad 11 smd rect (at ${def_neg}8.89 1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP8.str})
        (pad 12 smd rect (at ${def_neg}8.89 3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP9.str})
        (pad 13 smd rect (at ${def_neg}8.89 6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 14 smd rect (at ${def_neg}8.89 8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP10.str})
        (pad 15 smd rect (at ${def_neg}8.89 11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP11.str})
        (pad 16 smd rect (at ${def_neg}8.89 13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP12.str})
        (pad 17 smd rect (at ${def_neg}8.89 16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP13.str})
        (pad 18 smd rect (at ${def_neg}8.89 19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 19 smd rect (at ${def_neg}8.89 21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP14.str})
        (pad 20 smd rect (at ${def_neg}8.89 24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP15.str})
        (pad 21 smd rect (at ${def_pos}8.89 24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP16.str})
        (pad 22 smd rect (at ${def_pos}8.89 21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP17.str})
        (pad 23 smd rect (at ${def_pos}8.89 19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 24 smd rect (at ${def_pos}8.89 16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP18.str})
        (pad 25 smd rect (at ${def_pos}8.89 13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP19.str})
        (pad 26 smd rect (at ${def_pos}8.89 11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP20.str})
        (pad 27 smd rect (at ${def_pos}8.89 8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP21.str})
        (pad 28 smd rect (at ${def_pos}8.89 6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 29 smd rect (at ${def_pos}8.89 3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP22.str})
        (pad 30 smd rect (at ${def_pos}8.89 1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.RUN.str})
        (pad 31 smd rect (at ${def_pos}8.89 -1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP26.str})
        (pad 32 smd rect (at ${def_pos}8.89 -3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP27.str})
        (pad 33 smd rect (at ${def_pos}8.89 -6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.AGND.str})
        (pad 34 smd rect (at ${def_pos}8.89 -8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GP28.str})
        (pad 35 smd rect (at ${def_pos}8.89 -11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.ADC_VREF.str})
        (pad 36 smd rect (at ${def_pos}8.89 -13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.V3V3_OUT.str})
        (pad 37 smd rect (at ${def_pos}8.89 -16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.V3V3_EN.str})
        (pad 38 smd rect (at ${def_pos}8.89 -19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.GND.str})
        (pad 39 smd rect (at ${def_pos}8.89 -21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.VSYS.str})
        (pad 40 smd rect (at ${def_pos}8.89 -24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${layer}.Cu ${layer}.Mask) ${p.VBUS.str})

        ${''/* The debug pads at the bottom of the pi pico */}
        (pad 41 smd rect (at -2.54 23.9  ${p.rot + 90}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${layer}.Cu ${layer}.Mask))
        (pad 42 smd rect (at 0 23.9 ${p.rot + 90}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${layer}.Cu ${layer}.Mask))
        (pad 43 smd rect (at 2.54 23.9 ${p.rot + 90}) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${layer}.Cu ${layer}.Mask))
    `
    }

    pico_footprint = ''
    if(p.mounted == 'front' || p.mounted == 'both' ) {
      layer = 'F'
      pico_footprint += standard(layer)
      if (p.pinSilkscreen)
        pico_footprint += pinSilkscreen('-', '', layer, '')

      if (p.mountingType == 'throughole' || p.mountingType == 'both') {
        pico_footprint += pins('-', '')
      }
      if (p.mountingType == 'smd' || p.mountingType == 'both'){
        pico_footprint += pads('-', '', layer)
      }
      pico_footprint += ')'
    }
    if (p.mounted == 'back' || p.mounted == 'both'){
      layer = 'B'
      pico_footprint += standard(layer)
      if (p.pinSilkscreen)
        pico_footprint += pinSilkscreen('', '-', layer, '(justify mirror)')

      if (p.mountingType == 'throughole' || p.mountingType == 'both') {
        if(p.mounted != 'both') {//Don't add the pico_footprint of the pins if they were already added by the front
          pico_footprint += pins('', '-')
        }
      }
      if (p.mountingType == 'smd' || p.mountingType == 'both'){
        pico_footprint += pads('', '-', layer)
      }
      pico_footprint += ')'
    }
    return pico_footprint
  }
}