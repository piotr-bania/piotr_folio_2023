uniform float u_Alpha;
uniform float u_Multiplayer;
uniform vec3 u_Color_A;
uniform vec3 u_Color_B;
uniform float u_Time;

varying vec2 vUv;

void main() {
    vec2 mulvUv = mod(vUv * u_Multiplayer, 1.0);
    float strength = step(0.5, mod(mulvUv.y + u_Time, 1.0));
    vec3 mixColor = mix(u_Color_A, u_Color_B, step(0.5, mod(vUv.y * u_Multiplayer / 2.0, 1.0)));

	gl_FragColor.rgba = vec4(mixColor, min(strength, u_Alpha));
}