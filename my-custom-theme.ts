
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #344b74 
		"--color-primary-50": "225 228 234", // #e1e4ea
		"--color-primary-100": "214 219 227", // #d6dbe3
		"--color-primary-200": "204 210 220", // #ccd2dc
		"--color-primary-300": "174 183 199", // #aeb7c7
		"--color-primary-400": "113 129 158", // #71819e
		"--color-primary-500": "52 75 116", // #344b74
		"--color-primary-600": "47 68 104", // #2f4468
		"--color-primary-700": "39 56 87", // #273857
		"--color-primary-800": "31 45 70", // #1f2d46
		"--color-primary-900": "25 37 57", // #192539
		// secondary | #84abe3 
		"--color-secondary-50": "237 242 251", // #edf2fb
		"--color-secondary-100": "230 238 249", // #e6eef9
		"--color-secondary-200": "224 234 248", // #e0eaf8
		"--color-secondary-300": "206 221 244", // #ceddf4
		"--color-secondary-400": "169 196 235", // #a9c4eb
		"--color-secondary-500": "132 171 227", // #84abe3
		"--color-secondary-600": "119 154 204", // #779acc
		"--color-secondary-700": "99 128 170", // #6380aa
		"--color-secondary-800": "79 103 136", // #4f6788
		"--color-secondary-900": "65 84 111", // #41546f
		// tertiary | #Fcca04 
		"--color-tertiary-50": "255 247 217", // #fff7d9
		"--color-tertiary-100": "254 244 205", // #fef4cd
		"--color-tertiary-200": "254 242 192", // #fef2c0
		"--color-tertiary-300": "254 234 155", // #feea9b
		"--color-tertiary-400": "253 218 79", // #fdda4f
		"--color-tertiary-500": "252 202 4", // #Fcca04
		"--color-tertiary-600": "227 182 4", // #e3b604
		"--color-tertiary-700": "189 152 3", // #bd9803
		"--color-tertiary-800": "151 121 2", // #977902
		"--color-tertiary-900": "123 99 2", // #7b6302
		// success | #10c132 
		"--color-success-50": "219 246 224", // #dbf6e0
		"--color-success-100": "207 243 214", // #cff3d6
		"--color-success-200": "195 240 204", // #c3f0cc
		"--color-success-300": "159 230 173", // #9fe6ad
		"--color-success-400": "88 212 112", // #58d470
		"--color-success-500": "16 193 50", // #10c132
		"--color-success-600": "14 174 45", // #0eae2d
		"--color-success-700": "12 145 38", // #0c9126
		"--color-success-800": "10 116 30", // #0a741e
		"--color-success-900": "8 95 25", // #085f19
		// warning | #FFEA00 
		"--color-warning-50": "255 252 217", // #fffcd9
		"--color-warning-100": "255 251 204", // #fffbcc
		"--color-warning-200": "255 250 191", // #fffabf
		"--color-warning-300": "255 247 153", // #fff799
		"--color-warning-400": "255 240 77", // #fff04d
		"--color-warning-500": "255 234 0", // #FFEA00
		"--color-warning-600": "230 211 0", // #e6d300
		"--color-warning-700": "191 176 0", // #bfb000
		"--color-warning-800": "153 140 0", // #998c00
		"--color-warning-900": "125 115 0", // #7d7300
		// error | #e01a1a 
		"--color-error-50": "250 221 221", // #fadddd
		"--color-error-100": "249 209 209", // #f9d1d1
		"--color-error-200": "247 198 198", // #f7c6c6
		"--color-error-300": "243 163 163", // #f3a3a3
		"--color-error-400": "233 95 95", // #e95f5f
		"--color-error-500": "224 26 26", // #e01a1a
		"--color-error-600": "202 23 23", // #ca1717
		"--color-error-700": "168 20 20", // #a81414
		"--color-error-800": "134 16 16", // #861010
		"--color-error-900": "110 13 13", // #6e0d0d
		// surface | #aaebee 
		"--color-surface-50": "242 252 252", // #f2fcfc
		"--color-surface-100": "238 251 252", // #eefbfc
		"--color-surface-200": "234 250 251", // #eafafb
		"--color-surface-300": "221 247 248", // #ddf7f8
		"--color-surface-400": "196 241 243", // #c4f1f3
		"--color-surface-500": "170 235 238", // #aaebee
		"--color-surface-600": "153 212 214", // #99d4d6
		"--color-surface-700": "128 176 179", // #80b0b3
		"--color-surface-800": "102 141 143", // #668d8f
		"--color-surface-900": "83 115 117", // #537375
		
	}
}