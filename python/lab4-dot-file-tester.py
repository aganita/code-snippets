#!/usr/bin/python3

"""
Georgia Tech CS-6747 - Advanced Malware Analysis - Lab4
Compare two .dot files and print out mismatches.
Usage: python3 lab4-dot-file-tester.py original-file.dot your-version.dot
"""

__author__ = "Ani Agajanyan"
__copyright__ = "Copyright 2021, Ani Agajanyan"
__license__ = "MIT License"
__version__ = "1.1.0"
__maintainer__ = "Ani Agajanyan"

import sys

class bcolors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    ENDC = '\033[0m'


def read_file(file_path):
    lines_raw = []
    lines = []
    
    with open(file_path) as f:
        lines_raw = f.readlines()
    
    for line in lines_raw:
        line = line.strip('\n\t').lstrip().rstrip()
        if (not line.startswith('//')):
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
        parsed_flow.append(f'{current_line_elements[0]}->{current_line_elements[1]}')

    return parsed_flow


def compare_first_part(original, student):
    print(f'{bcolors.CYAN}Comparing the first part of the .dot files{bcolors.ENDC}')
    
    is_match = True
    addresses_original = []
    addresses_student = []
    original_dict = {}
    student_dict = {}

    for elm in original:
        addresses_original.append(elm[1])
        original_dict[elm[1]] = [elm[0], elm[2]]

    for elm in student:
        addresses_student.append(elm[1])
        student_dict[elm[1]] = [elm[0], elm[2]]

    if (set(addresses_original) ^ set(addresses_student)):
        is_match = False
        if (set(addresses_original) - set(addresses_student)):
            print(f' Missing addresses in your version: {bcolors.RED}{set(addresses_original) - set(addresses_student)}{bcolors.ENDC}')
        if (set(addresses_student) - set(addresses_original)):
            print(f' Extra addresses found in your version: {bcolors.RED}{set(addresses_student) - set(addresses_original)}{bcolors.ENDC}')
        print(f' Full list of mismatched addresses between two versions: {bcolors.RED}{set(addresses_original) ^ set(addresses_student)}{bcolors.ENDC}')
    
    for key in original_dict:
        original_dict[key][1].sort()
        student_dict[key][1].sort()

        if (original_dict[key][1] != student_dict[key][1]):
            is_match = False
            print(f' {bcolors.GREEN}TA\'s version: {original_dict[key][0]}, address:{key}, DD: {original_dict[key][1]}{bcolors.ENDC}')
            print(f' {bcolors.RED}Your version: {student_dict[key][0]}, address:{key}, DD: {student_dict[key][1]}{bcolors.ENDC}\n')

    if (is_match):
        print(f'{bcolors.GREEN}Congrats! First part of .dot file is a perfect match!{bcolors.ENDC}')

    return


def compare_second_part(original, student):
    print(f'\n{bcolors.CYAN}Comparing the second part of the .dot files{bcolors.ENDC}')        
    is_match = True

    if (set(original) ^ set(student)):
        is_match = False
        if (set(original) - set(student)):
            print(f' Missing nodes in your version: {bcolors.RED}{set(original) - set(student)}{bcolors.ENDC}')
        if (set(student) - set(original)):
            print(f' Extra nodes found in your version: {bcolors.RED}{set(student) - set(original)}{bcolors.ENDC}')
        print(f' Full list of mismatched nodes between two versions: {bcolors.RED}{set(original) ^ set(student)}{bcolors.ENDC}')
    
    if (is_match):
        print(f'{bcolors.GREEN}Congrats! Second part of .dot file is a perfect match!{bcolors.ENDC}')

    return


def remove_comments(lines):
    #TODO: remove endline comments
    return 


def main(argv):
    if (len(argv) != 2):
        print('f{bcolors.YELLOW}Enter two .dot files to compare{bcolors.ENDC}')
        return
    
    file_TA_version = sys.argv[1]
    file_student_version = sys.argv[2]

    lines_TA_version = read_file(file_TA_version)
    lines_student_version = read_file(file_student_version)

    # lines_TA_version = remove_comments(lines_TA_version)
    # lines_student_version = remove_comments(lines_student_version)

    firt_part_TA_version = parse_first_part(lines_TA_version)
    firt_part_student_version = parse_first_part(lines_student_version)

    second_part_TA_version = parse_second_part(lines_TA_version)
    second_part_student_version = parse_second_part(lines_student_version)

    compare_first_part(firt_part_TA_version, firt_part_student_version)
    compare_second_part(second_part_TA_version, second_part_student_version)


if __name__ == "__main__":
   main(sys.argv[1:])