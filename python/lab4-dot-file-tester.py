#!/usr/bin/python3

"""
Georgia Tech CS-6747 - Advanced Malware Analysis - Lab4
Compare two dot files and print out mismatches
"""

__author__ = "Ani Agajanyan"
__copyright__ = "Copyright 2021, Ani Agajanyan"
__license__ = "MIT License"
__version__ = "1.0.0"
__maintainer__ = "Ani Agajanyan"

import sys

def read_file(file_path):
    lines_raw = []
    lines = []
    
    with open(file_path) as f:
        lines_raw = f.readlines()
    
    for line in lines_raw:
        line = line.strip('\n\t').lstrip().rstrip()
        lines.append(line)

    return lines[1:-1]


def parse_first_part(lines):
    start_index = 0 
    end_index = 0
    parsed_nodes = []

    # find the end index for node labels part of dot file
    for line in lines:
        if (line[-1] == ']'):
            end_index +=1
        else:
            break

    for i in range(start_index, end_index):
        node_data = []
        current_line_elements = lines[i].split('"')
        
        # get node name
        raw_data = current_line_elements[0].split('[')
        node_name = raw_data[0].strip()
        node_data.append(node_name)

        # get node addess
        raw_data = current_line_elements[1].split(';')
        node_address = raw_data[0].strip()
        node_data.append(node_address)
        
        # get node DD as a list
        raw_data = raw_data[1].split('DD:')
        node_dd = raw_data[1].strip()
        node_data.append(node_dd.split(','))

        parsed_nodes.append(node_data)
        print(node_data)

    return parsed_nodes  


def parse_second_part(lines):
    start_index = 0 
    end_index = len(lines) - 1
    parsed_flow = []

    # find start index for node control flow part of dot file
    for line in lines:
        if (line[-1] == ']'):
            start_index +=1
        else:
            break

    for i in range(start_index, end_index+1):
        current_line_elements = lines[i].split('->')
        current_line_elements[0] = current_line_elements[0].strip()
        current_line_elements[1] = current_line_elements[1].strip()
        parsed_flow.append(current_line_elements)

    return parsed_flow


def compare_first_part(original, student):
    
    print('')

def compare_second_part(original, student):
    
    print('')

def main(argv):
    if (len(argv) != 2):
        print('Enter two .dot files to compare')
        return
    
    file_TA_version = sys.argv[1]
    file_student_version = sys.argv[2]
    
    lines_TA_version = read_file(file_TA_version)
    lines_student_version = read_file(file_student_version)

    firt_part_TA_version = parse_first_part(lines_TA_version)
    firt_part_student_version = parse_first_part(lines_student_version)

    second_part_TA_version = parse_second_part(lines_TA_version)
    second_part_student_version = parse_second_part(lines_student_version)

    compare_first_part(firt_part_TA_version, firt_part_student_version)
    # compare_second_part(second_part_TA_version, second_part_student_version)


if __name__ == "__main__":
   main(sys.argv[1:])