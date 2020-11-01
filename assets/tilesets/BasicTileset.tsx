<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.2" name="BasicTileset" tilewidth="32" tileheight="32" spacing="1" margin="1" tilecount="35" columns="5">
 <image source="BasicTileset.png" width="166" height="232"/>
 <terraintypes>
  <terrain name="Gesperrt" tile="29"/>
  <terrain name="Frei" tile="24"/>
 </terraintypes>
 <tile id="20" terrain="0,0,0,">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="17"/>
   <object id="2" x="0" y="0" width="17" height="32"/>
  </objectgroup>
 </tile>
 <tile id="21" terrain="0,0,,0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="17"/>
   <object id="2" x="16" y="0" width="16" height="32"/>
  </objectgroup>
 </tile>
 <tile id="22" terrain="1,1,1,0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="16" y="16" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="23" terrain="1,1,0,1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="16" width="17" height="16"/>
  </objectgroup>
 </tile>
 <tile id="24" terrain="1,1,1,1"/>
 <tile id="25" terrain="0,,0,0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="17" height="32"/>
   <object id="2" x="0" y="16" width="32" height="16"/>
  </objectgroup>
 </tile>
 <tile id="26" terrain=",0,0,0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="16" y="0" width="16" height="32"/>
   <object id="2" x="0" y="16" width="32" height="16"/>
   <object id="3" x="13.2695" y="51.5007"/>
  </objectgroup>
 </tile>
 <tile id="27" terrain="1,0,1,1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="16" y="0" width="16" height="17"/>
  </objectgroup>
 </tile>
 <tile id="28" terrain="0,1,1,1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="17" height="17"/>
  </objectgroup>
 </tile>
 <tile id="29" terrain="0,0,0,0">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
   <object id="2" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="30" terrain="1,1,0,0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="16" width="32" height="16"/>
  </objectgroup>
 </tile>
 <tile id="31" terrain="0,0,1,1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="17"/>
  </objectgroup>
 </tile>
 <tile id="32">
  <animation>
   <frame tileid="32" duration="500"/>
   <frame tileid="33" duration="500"/>
   <frame tileid="34" duration="500"/>
  </animation>
 </tile>
</tileset>
