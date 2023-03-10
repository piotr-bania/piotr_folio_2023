precision mediump float;

uniform float u_Alpha;
uniform float u_Multiplayer;
uniform vec3 u_Color_A;
uniform vec3 u_Color_B;
uniform float u_Time;

varying vec2 vUv;

void main() {
    // vec2 mulvUv = mod(vUv * u_Multiplayer, 1.0);
    // float strength = step(0.5, mod(mulvUv.x + u_Time, 1.0));
    // vec3 mixColor = mix(u_Color_A, u_Color_B, step(0.5, mod(vUv.x * u_Multiplayer + u_Time, 1.0)));

	// gl_FragColor.rgba = vec4(mixColor, min(strength, u_Alpha));

    gl_FragColor.rgba = vec4(1.0, 0.0, 1.0, u_Alpha);
}