#!/bin/bash

cat /dev/null > fonts.scss
cat /dev/null > font_names.txt

TEMP_CLASSES=$(mktemp -p $(pwd))
FONT_NAMES=font_names.txt


ls -1 ./assets/*.ttf | while read fontname
do
    NORMALIZED_FONT_NAME=$(echo $(basename ${fontname}) | sed 's/\.ttf//')
    cat <<EOF >> fonts.scss
@font-face {
   font-family: "$(basename $fontname)";
   src: url('../assets/$(basename $fontname)');
}
EOF
    cat <<EOF >> $TEMP_CLASSES
.f-${NORMALIZED_FONT_NAME} {
   font-family: '$(basename $fontname)';
}
EOF

    cat <<EOF >> $FONT_NAMES
${NORMALIZED_FONT_NAME}
EOF

done

echo -e "\n\n" >> fonts.scss
cat $TEMP_CLASSES >> fonts.scss

mv fonts.scss ./styles/fonts.scss
rm ${TEMP_CLASSES}
