#version 410 core
// This is a sample fragment shader.

// Inputs to the fragment shader are the outputs of the same name from the vertex shader.
// Note that you do not have access to the vertex shader's default output, gl_Position.
in vec3 vertNormal;

// You can output many things. The first vec4 type output determines the color of the fragment
out vec4 fragColor;

void main()
{
	vec3 color = vec3(0.4, 0.4, 0.8);
	//if (!all(equal(color, abs(color)))) {
    //    color = vec3(1.0) - abs(color);
    //}
    fragColor = vec4(color, 1.0);
}
